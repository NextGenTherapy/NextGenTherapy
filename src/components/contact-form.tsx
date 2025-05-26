"use client";

import React, { useState, useRef } from "react";
import styles from "./contact-form.module.css";
import Button from "./button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    const form = event.currentTarget;
    const formData = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        if (messageRef.current) messageRef.current.style.height = "auto";
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleMessageInput = () => {
    const textarea = messageRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      {status === "success" && (
        <div className={styles.statusSuccess}>Thank you! Your message has been sent.</div>
      )}
      {status === "error" && (
        <div className={styles.statusError}>Sorry, something went wrong. Please try again.</div>
      )}
      <div className={styles.formGroup}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          ref={messageRef}
          onInput={handleMessageInput}
          className={styles.textareaAutoGrow}
        ></textarea>
      </div>
      <Button type="submit">Send</Button>
    </form>
  );
}