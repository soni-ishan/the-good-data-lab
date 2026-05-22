"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setFeedback({ type: "error", message: "Please fill out name, email, and message." });
      setIsSubmitting(false);
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      setFeedback({ type: "error", message: "Please enter a valid email address." });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Something went wrong.");
      }

      setFeedback({ type: "success", message: result.message ?? "Your message has been sent." });
      setForm(initialState);
    } catch (error) {
      setFeedback({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-emerald-200/15 bg-[#0b2118]/80 p-6 shadow-[0_20px_60px_-35px_rgba(52,211,153,0.45)] sm:p-8">
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-stone-200">Name</span>
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            type="text"
            name="name"
            required
            minLength={2}
            maxLength={80}
            className="rounded-xl border border-emerald-200/15 bg-[#06130e] px-4 py-3 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-emerald-300/40"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-stone-200">Email</span>
          <input
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            type="email"
            name="email"
            required
            maxLength={120}
            className="rounded-xl border border-emerald-200/15 bg-[#06130e] px-4 py-3 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-emerald-300/40"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium text-stone-200">Message</span>
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            name="message"
            required
            rows={6}
            minLength={10}
            maxLength={3000}
            className="rounded-xl border border-emerald-200/15 bg-[#06130e] px-4 py-3 text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-emerald-300/40"
            placeholder="What would you like to share?"
          />
        </label>

        {feedback ? (
          <p
            className={`rounded-xl border px-4 py-3 text-sm ${
              feedback.type === "success"
                ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
                : "border-rose-400/30 bg-rose-500/10 text-rose-100"
            }`}
          >
            {feedback.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-xl bg-emerald-300 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#052016] transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}