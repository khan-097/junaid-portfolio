import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // WhatsApp redirect
    const msg = encodeURIComponent(
      `নাম: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/8801743558176?text=${msg}`, "_blank");
    setForm({ name: "", email: "", message: "" });
    setLoading(false);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="যোগাযোগ করুন"
          sub="💬 কোনো প্রশ্ন বা কাজের কথা বলতে চান? আমাকে জানান! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              {sent && (
                <div className="mb-4 p-3 bg-green-800 rounded-lg text-center text-sm">
                  ✅ WhatsApp খুলছে...
                </div>
              )}
              <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                <div>
                  <label htmlFor="name">আপনার নাম</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} placeholder="আপনার নাম লিখুন" required />
                </div>
                <div>
                  <label htmlFor="email">Email (optional)</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder="আপনার email" />
                </div>
                <div>
                  <label htmlFor="message">বার্তা</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="কী বলতে চান?" rows="5" required />
                </div>
                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">{loading ? "খুলছে..." : "WhatsApp এ পাঠান"}</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
                <div className="text-center text-white-50 text-sm mt-2">
                  অথবা সরাসরি:&nbsp;
                  <a href="tel:01743558176" className="text-purple-400">📞 01743-558176</a>
                  &nbsp;·&nbsp;
                  <a href="mailto:mdjunaidkhan097@gmail.com" className="text-purple-400">✉️ Email</a>
                </div>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
