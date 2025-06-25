import { useState } from "react";

function ContactSection() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending (e.g. network request)
    setTimeout(() => {
      alert("Message sent successfully!");
      setIsSending(false);
    }, 3000);
  };

  return (
    <section id="contact" className="w-full px-6 py-12 bg-white">
      <h2 className="mb-10 text-3xl font-bold text-center text-heading">
        Get in Touch
      </h2>

      <div className="flex justify-center">
        {!isSending ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl space-y-6 bg-white rounded-lg"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 text-black border rounded focus:outline-primary"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-3 text-black border rounded focus:outline-primary"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              required
              className="w-full p-3 text-black border rounded focus:outline-primary"
            ></textarea>
            <button
              type="submit"
              className="px-8 py-3 text-white transition rounded bg-primary hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center">
            <img
              src="/images/contactLogo.webp"
              alt="Sending dog"
              className="w-60 h-60 animate-run"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactSection;
