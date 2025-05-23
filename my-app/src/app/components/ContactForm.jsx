'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        const msg = data.error || 'Failed to send message';
        console.error('Email error:', msg);
        setErrorMessage(msg);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error:', err);
      setErrorMessage(err.message || 'Network error');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black">
      <input
        name="name"
        type="text"
        placeholder="Your name"
        required
        value={form.name}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded bg-white text-black placeholder-black"
      />

      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        value={form.email}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded bg-white text-black placeholder-black"
      />

      <textarea
        name="message"
        placeholder="Your message"
        required
        rows={4}
        value={form.message}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded bg-white text-black placeholder-black"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-700">Thanks! I’ll get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="text-red-700">Oops! {errorMessage}</p>
      )}
    </form>
  );
}
