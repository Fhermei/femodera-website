import { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const response = await fetch(
      import.meta.env.VITE_FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    setLoading(false);

    if (response.ok) {
      setSuccess(true);
      e.target.reset();
    }
  }

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F7F4F0 0%, #FFFFFF 100%)",
      }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand/5" />
        <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-brand/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Contact
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Let’s discuss your academic or technical project
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Share your research idea or technical request. Every submission is
            reviewed carefully and handled professionally.
          </p>
        </div>

        {/* Form */}
        <div className="mt-16 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white border border-gray-200 shadow-xl p-8 sm:p-10 grid gap-6"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand focus:outline-none"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand focus:outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand focus:outline-none"
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Describe your project, research topic, or request"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex justify-center rounded-lg bg-brand px-8 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit request"}
            </button>
          </form>
        </div>

      </div>

      {/* SUCCESS MODAL */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900">
              Submission successful
            </h3>

            <p className="mt-4 text-gray-600">
              Thank you for reaching out. Your request has been received and
              will be reviewed carefully. You’ll hear from us shortly.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-6 inline-flex justify-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
