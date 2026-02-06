import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_YOUR_TEMPLATE_ID",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "umeakakosiso@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
      );

      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full max-w-4xl mx-auto space-y-20 pb-24 px-6 scroll-mt-32 reveal"
    >
      <div className="text-center space-y-6">
        <h3 className="text-zinc-600 text-sm tracking-[0.7em] uppercase font-black">
          Secure Transmission
        </h3>
        <h2 className="text-4xl md:text-6xl font-heading font-black text-white">
          Ready to initiate?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
      </div>

      <div className="service-card rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden ring-1 ring-white/10">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
        {formStatus === "sent" ? (
          <div className="text-center space-y-8 py-12 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto text-blue-400 text-4xl shadow-[0_0_50px_-10px_rgba(59,130,246,0.6)]">
              ✓
            </div>
            <div className="space-y-4">
              <h4 className="text-3xl font-heading font-black text-white uppercase tracking-widest">
                Handshake Complete
              </h4>
              <p className="text-zinc-500 font-light italic text-lg max-w-md mx-auto">
                Signal locked and encrypted. Our primary engineers will make
                contact on this frequency.
              </p>
            </div>
            <button
              onClick={() => setFormStatus("idle")}
              className="mt-10 px-10 py-4 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-zinc-600 text-xs font-black uppercase tracking-[0.5em] transition-all bg-zinc-900/50"
            >
              Reset Terminal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                  Identity / Entity
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder-zinc-800 text-base"
                  placeholder="Name or Organization"
                />
              </div>
              <div className="space-y-4">
                <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                  Secure Channel
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all placeholder-zinc-800 text-base"
                  placeholder="Email@Protocol.com"
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-xs tracking-[0.5em] text-zinc-500 uppercase font-black ml-1">
                Mission Parameters
              </label>
              <textarea
                required
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/60 border border-zinc-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-blue-500 transition-all resize-none placeholder-zinc-800 text-base"
                placeholder="Brief us on your requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className={`w-full custom-btn py-6 rounded-2xl text-white font-black tracking-[0.4em] text-sm uppercase shadow-3xl transition-all active:scale-[0.99] hover:shadow-blue-500/10 ${
                formStatus === "sending"
                  ? "bg-blue-500/70 hover:bg-blue-500/70 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {formStatus === "sending"
                ? "Broadcasting Signal..."
                : "Initiate Secure Handshake"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
