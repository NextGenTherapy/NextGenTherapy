'use client';

import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';

import { ContactFormData, FormErrors, LoadingState, ContactMethod, EnquiryFor } from '../../types';
import { validateEnquiryForm } from '../../lib/utils';

import styles from './contact-form.module.scss';

const MAX_MESSAGE_LENGTH = 1000;

export default function ContactForm() {
  const [status, setStatus] = useState<LoadingState>('idle');
  const [serverError, setServerError] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});

  // Controlled form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    enquiryFor: 'myself',
    message: '',
    gdprConsent: false,
    honeypot: '',
  });

  // Refs for focus management
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const contactMethodRef = useRef<HTMLFieldSetElement>(null);
  const enquiryForRef = useRef<HTMLFieldSetElement>(null);
  const gdprRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  // Map field names to refs for focus management
  const fieldRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
    contactMethod: contactMethodRef,
    enquiryFor: enquiryForRef,
    gdprConsent: gdprRef,
  };

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));

      // Clear error for this field when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('idle');
    setServerError('');
    setErrors({});

    // Client-side validation
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
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactMethod: 'email',
          enquiryFor: 'myself',
          message: '',
          gdprConsent: false,
          honeypot: '',
        });
        // Focus on success message for screen readers
        setTimeout(() => {
          successRef.current?.focus();
        }, 100);
      } else {
        const errorData = await res.json().catch(() => ({}));
        setStatus('error');
        setServerError(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerError('Unable to send your message. Please check your connection and try again.');
    }
  };

  const messageLength = formData.message?.length || 0;

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
          <strong>Thank you for getting in touch.</strong> I&apos;ll be in contact within 1-2
          working days.
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
          value={formData.honeypot}
          onChange={handleInputChange}
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
          value={formData.name}
          onChange={handleInputChange}
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
          value={formData.email}
          onChange={handleInputChange}
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={errors.email ? styles.inputError : undefined}
          autoComplete="email"
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
          value={formData.phone}
          onChange={handleInputChange}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : 'phone-hint'}
          className={errors.phone ? styles.inputError : undefined}
          autoComplete="tel"
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
              checked={formData.contactMethod === 'email'}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  contactMethod: e.target.value as ContactMethod,
                }))
              }
            />
            <span>Email</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="contactMethod"
              value="phone"
              checked={formData.contactMethod === 'phone'}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  contactMethod: e.target.value as ContactMethod,
                }))
              }
            />
            <span>Phone</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="contactMethod"
              value="either"
              checked={formData.contactMethod === 'either'}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  contactMethod: e.target.value as ContactMethod,
                }))
              }
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
          Who is this enquiry for? <span className={styles.required}>*</span>
        </legend>
        <div className={styles.radioOptions}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="enquiryFor"
              value="myself"
              checked={formData.enquiryFor === 'myself'}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, enquiryFor: e.target.value as EnquiryFor }))
              }
            />
            <span>Myself</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="enquiryFor"
              value="child"
              checked={formData.enquiryFor === 'child'}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, enquiryFor: e.target.value as EnquiryFor }))
              }
            />
            <span>My child or teenager</span>
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="enquiryFor"
              value="other"
              checked={formData.enquiryFor === 'other'}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, enquiryFor: e.target.value as EnquiryFor }))
              }
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
          Anything you would like to share <span className={styles.optional}>(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          aria-invalid={!!errors.message}
          aria-describedby="message-counter message-hint"
          className={errors.message ? styles.inputError : undefined}
          maxLength={MAX_MESSAGE_LENGTH}
        />
        <div className={styles.messageFooter}>
          <span id="message-hint" className={styles.fieldHint}>
            This is optional. We can discuss everything on the call.
          </span>
          <span
            id="message-counter"
            className={styles.charCounter}
            aria-live="polite"
            aria-atomic="true"
          >
            {messageLength}/{MAX_MESSAGE_LENGTH}
          </span>
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
            checked={formData.gdprConsent}
            onChange={handleInputChange}
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
        {status === 'loading' ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  );
}
