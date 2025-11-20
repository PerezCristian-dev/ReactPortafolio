import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface ContactProps {
  reference?: React.RefObject<HTMLElement>;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = ({ reference }: ContactProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        "service_rx6yp75",
        "template_quptqrp",
        formData,
        "j1aIwyxn4IGORSgLX"
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={reference}
      className="py-20 lg:py-32 bg-base-200"
      aria-labelledby="contact-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="text-4xl lg:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Let's talk about everything!</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-envelope text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:cristianperez.dev@gmail.com"
                      className="text-base-content/70 hover:text-primary transition-colors"
                    >
                      cristianperez.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fa-brands fa-linkedin text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/cristian-perez-425ab2237/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base-content/70 hover:text-primary transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-location-dot text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-base-content/70">Dominican Republic</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src="/Portafolio BG-Image.png"
                alt="Contact illustration"
                className="w-full rounded-2xl opacity-80"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                <div className="form-control">
                  <label htmlFor="name" className="label">
                    <span className="label-text font-semibold">Your Name</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered focus:input-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="email" className="label">
                    <span className="label-text font-semibold">Your Email</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered focus:input-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="message" className="label">
                    <span className="label-text font-semibold">Your Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="textarea textarea-bordered focus:textarea-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {error && (
                  <div className="alert alert-error">
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full gap-2 ${
                    isSubmitting ? "loading" : ""
                  }`}
                >
                  {!isSubmitting && <i className="fa-solid fa-paper-plane"></i>}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-card p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <i className="fa-solid fa-circle-check text-success text-8xl mb-6"></i>
                </motion.div>

                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-base-content/70 mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn btn-outline"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
