import { useState } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react"; // icons

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (error) {
      setStatus("Error connecting to server ❌");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
        I’d love to hear from you! Whether you have a question, want to discuss a project, 
        or just want to say hi, feel free to drop me a message below.
      </p>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-gray-700">{status}</p>}
        </form>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Contact Info</h2>
          <p className="text-gray-700">
            You can also reach out to me through the following platforms:
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-800">
              <Mail className="text-blue-600" /> 
              <a
                href="mailto:banupraveena21@gmail.com"
                className="hover:underline"
              >
                banupraveena21@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-3 text-gray-800">
              <Linkedin className="text-blue-600" />
              <a
                href="https://linkedin.com/in/banupraveena21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/banupraveena21
              </a>
            </p>

            <p className="flex items-center gap-3 text-gray-800">
              <Github className="text-blue-600" />
              <a
                href="https://github.com/banupraveena21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/banupraveena21
              </a>
            </p>

            <p className="flex items-center gap-3 text-gray-800">
              <MapPin className="text-blue-600" />
              <span>Hosur, India</span>
            </p>
          </div>

          <div className="mt-6">
            <iframe
              title="map"
              className="w-full h-48 rounded-lg"
              src="https://maps.google.com/maps?q=Hosur&t=&z=11&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
