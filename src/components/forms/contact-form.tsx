'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';

import { ContactFormData, FormErrors, LoadingState, ContactMethod, EnquiryFor } from '../../types';
import { validateEnquiryForm } from '../../lib/utils';
import { trackFormSubmission } from '@/lib/analytics';

import styles from './contact-form.module.scss';

const MAX_MESSAGE_LENGTH = 1000;

// Subscribed to the textarea via a DOM input listener so typing doesn't
// re-render the parent form. Remounted on form reset via a key prop.
function MessageCharCounter({
  textareaRef,
  max,
}: {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  max: number;
}) {
  const [length, setLength] = useState(0);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    setLength(el.value.length);
    const handler = () => setLength(el.value.length);
    el.addEventListener('input', handler);
    return () => el.removeEventListener('input', handler);
  }, [textareaRef]);

  return (
    <span id="message-counter" className={styles.charCounter}>
      {length}/{max}
    </span>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<LoadingState>('idle');
  const [serverError, setServerError] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});

  // Radios + checkbox stay controlled — they only change on click, not per keystroke.
  const [contactMethod, setContactMethod] = useState<ContactMethod>('email');
  const [enquiryFor, setEnquiryFor] = useState<EnquiryFor>('myself');
  const [gdprConsent, setGdprConsent] = useState(false);

  // Bumped after a successful submission to remount the char counter.
  const [formKey, setFormKey] = useState(0);

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const contactMethodRef = useRef<HTMLFieldSetElement>(null);
  const enquiryForRef = useRef<HTMLFieldSetElement>(null);
  const gdprRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const fieldRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
    contactMethod: contactMethodRef,
    enquiryFor: enquiryForRef,
    gdprConsent: gdprRef,
  };

  const focusFirstError = (validationErrors: FormErrors) => {
    const errorFields = Object.keys(validationErrors) as (keyof FormErrors)[];
    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0];
      const ref = fieldRefs[firstErrorField];
      if (ref?.current) {
        ref.current.focus();
      }
    }
  };

  // Stable: no `errors` dep. Functional update bails out when nothing to clear,
  // so most keystrokes do not trigger a parent re-render.
  const clearFieldError = useCallback((field: keyof FormErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('idle');
    setServerError('');
    setErrors({});

    const formData: ContactFormData = {
      name: nameRef.current?.value.trim() ?? '',
      email: emailRef.current?.value.trim() ?? '',
      phone: phoneRef.current?.value.trim() ?? '',
      contactMethod,
      enquiryFor,
      message: messageRef.current?.value ?? '',
      gdprConsent,
      honeypot:
        (formRef.current?.elements.namedItem('honeypot') as HTMLInputElement | null)?.value ?? '',
    };

    const validationErrors = validateEnquiryForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      contactMethod: formData.contactMethod,
      enquiryFor: formData.enquiryFor,
      message: formData.message,
      gdprConsent: formData.gdprConsent,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      focusFirstError(validationErrors);
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        trackFormSubmission(formData.enquiryFor, window.location.pathname);
        formRef.current?.reset();
        setContactMethod('email');
        setEnquiryFor('myself');
        setGdprConsent(false);
        setFormKey((k) => k + 1);
        setTimeout(() => {
          successRef.current?.focus();
        }, 100);
      } else {
        const errorData = await res.json().catch(() => ({}));
        setStatus('error');
        setServerError(
          errorData.error ||
            'Something went wrong. Please try again, or email me directly at andreeatherapytoday@gmail.com'
        );
      }
    } catch {
      setStatus('error');
      setServerError('Unable to send your message. Please check your connection and try again.');
    }
  };

  return (
    <form
      ref={formRef}
      className={styles.contactForm}
      onSubmit={handleSubmit}
      noValidate
      aria-describedby={status === 'error' ? 'form-error' : undefined}
    >
      {status === 'success' && (
        <div
          ref={successRef}
          className={styles.statusSuccess}
          role="status"
          aria-live="polite"
          tabIndex={-1}
        >
          <strong>Thanks</strong> — I&apos;ll be in touch within 1–2 working days.
        </div>
      )}

      {status === 'error' && serverError && (
        <div id="form-error" className={styles.statusError} role="alert">
          {serverError}
        </div>
      )}

      {status === 'loading' && (
        <div className={styles.statusLoading} role="status" aria-live="polite">
          Sending your message...
        </div>
      )}

      {/* Honeypot field - hidden from humans, visible to bots */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="honeypot"
          defaultValue=""
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name field */}
      <div className={styles.formGroup}>
        <label htmlFor="name">
          Your name <span className={styles.required}>*</span>
        </label>
        <input
          ref={nameRef}
          type="text"
          id="name"
          name="name"
          defaultValue=""
          onInput={() => clearFieldError('name')}
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={errors.name ? styles.inputError : undefined}
          autoComplete="name"
        />
        {errors.name && (
          <div id="name-error" className={styles.errorMessage} role="alert">
            {errors.name}
          </div>
        )}
      </div>

      {/* Email field */}
      <div className={styles.formGroup}>
        <label htmlFor="email">
          Email address <span className={styles.required}>*</span>
        </label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          name="email"
          defaultValue=""
          onInput={() => clearFieldError('email')}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={errors.email ? styles.inputError : undefined}
          autoComplete="email"
          inputMode="email"
        />
        {errors.email && (
          <div id="email-error" className={styles.errorMessage} role="alert">
            {errors.email}
          </div>
        )}
      </div>

      {/* Phone field */}
      <div className={styles.formGroup}>
        <label htmlFor="phone">
          Phone number <span className={styles.optional}>(optional)</span>
        </label>
        <input
          ref={phoneRef}
          type="tel"
          id="phone"
          name="phone"
          defaultValue=""
          onInput={() => clearFieldError('phone')}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
          className={errors.phone ? styles.inputError : undefined}
          autoComplete="tel"
          inputMode="tel"
        />
        <div id="phone-hint" className={styles.fieldHint}>
          UK numbers only (e.g., 07xxx or 01xxx)
        </div>
        {errors.phone && (
          <div id="phone-error" className={styles.errorMessage} role="alert">
            {errors.phone}
          </div>
        )}
      </div>

      {/* Contact method radio group */}
      <fieldset
        ref={contactMethodRef}
        className={styles.radioGroup}
        aria-invalid={!!errors.contactMethod}
        aria-describedby={errors.contactMethod ? 'contactMethod-error' : undefined}
      >
        <legend>
          How would you prefer to be contacted? <span className={styles.required}>*</span>
        </legend>
        <div className={styles.radioOptions}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="contactMethod"
              value="email"
              checked={contactMethod === 'email'}
              onChange={() => {
                setContactMethod('email');
                clearFieldError('contactMethod');
              }}
            />
            <span>Email</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              checked={contactMethod === 'phone'}
              onChange={() => {
                setContactMethod('phone');
                clearFieldError('contactMethod');
              }}
            />
            <span>Phone</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="contactMethod"
              value="either"
              checked={contactMethod === 'either'}
              onChange={() => {
                setContactMethod('either');
                clearFieldError('contactMethod');
              }}
            />
            <span>Either</span>
          </label>
        </div>
        {errors.contactMethod && (
          <div id="contactMethod-error" className={styles.errorMessage} role="alert">
            {errors.contactMethod}
          </div>
        )}
      </fieldset>

      {/* Enquiry for radio group */}
      <fieldset
        ref={enquiryForRef}
        className={styles.radioGroup}
        aria-invalid={!!errors.enquiryFor}
        aria-describedby={errors.enquiryFor ? 'enquiryFor-error' : undefined}
      >
        <legend>
          Are you contacting me about yourself, or someone else? <span className={styles.required}>*</span>
        </legend>
        <div className={styles.radioOptions}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="enquiryFor"
              value="myself"
              checked={enquiryFor === 'myself'}
              onChange={() => {
                setEnquiryFor('myself');
                clearFieldError('enquiryFor');
              }}
            />
            <span>Myself</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="enquiryFor"
              value="child"
              checked={enquiryFor === 'child'}
              onChange={() => {
                setEnquiryFor('child');
                clearFieldError('enquiryFor');
              }}
            />
            <span>My child or teenager</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="enquiryFor"
              value="other"
              checked={enquiryFor === 'other'}
              onChange={() => {
                setEnquiryFor('other');
                clearFieldError('enquiryFor');
              }}
            />
            <span>A family member or partner</span>
          </label>
        </div>
        {errors.enquiryFor && (
          <div id="enquiryFor-error" className={styles.errorMessage} role="alert">
            {errors.enquiryFor}
          </div>
        )}
      </fieldset>

      {/* Message field */}
      <div className={styles.formGroup}>
        <label htmlFor="message">
          What&apos;s bringing you to therapy? <span className={styles.optional}>(optional)</span>
        </label>
        <textarea
          ref={messageRef}
          id="message"
          name="message"
          rows={4}
          defaultValue=""
          onInput={() => clearFieldError('message')}
          aria-invalid={!!errors.message}
          aria-describedby="message-counter message-hint"
          className={errors.message ? styles.inputError : undefined}
          maxLength={MAX_MESSAGE_LENGTH}
          placeholder="A sentence or two is fine — you don't have to explain everything. This just helps me prepare for our call."
        />
        <div className={styles.messageFooter}>
          <span id="message-hint" className={styles.fieldHint}>
            This is optional — we can discuss everything on the call.
          </span>
          <MessageCharCounter key={formKey} textareaRef={messageRef} max={MAX_MESSAGE_LENGTH} />
        </div>
        {errors.message && (
          <div id="message-error" className={styles.errorMessage} role="alert">
            {errors.message}
          </div>
        )}
      </div>

      {/* GDPR consent checkbox */}
      <div className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input
            ref={gdprRef}
            type="checkbox"
            name="gdprConsent"
            checked={gdprConsent}
            onChange={(e) => {
              setGdprConsent(e.target.checked);
              clearFieldError('gdprConsent');
            }}
            aria-required="true"
            aria-invalid={!!errors.gdprConsent}
            aria-describedby={errors.gdprConsent ? 'gdprConsent-error' : undefined}
          />
          <span>
            I understand that the information I&apos;m sending will be used to respond to my enquiry
            and arrange a free 15-minute call. I&apos;ve read the{' '}
            <Link href="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
            . <span className={styles.required}>*</span>
          </span>
        </label>
        {errors.gdprConsent && (
          <div id="gdprConsent-error" className={styles.errorMessage} role="alert">
            {errors.gdprConsent}
          </div>
        )}
      </div>

      {/* Submit button */}
      <button type="submit" className={styles.submitButton} disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
