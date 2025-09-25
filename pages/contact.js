import Layout from "@/components/layout";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const responsive = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await responsive.json();
      if (data.success) {
        setStatus("Message sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Error sending message, Please try again.");
    }
  };

  const handleChanged = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Layout>
        <div className="p-6">
          <h1 className="text-4xl text-blue-600 font-bold mb-4">Contact me</h1>
          <form onSubmit={handleSubmit} className="max-w-2xl px-4 py-2">
            <div className="mb-4">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChanged}
                required
                className="w-full p-2  outline-none border-b border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChanged}
                required
                className="w-full p-2  outline-none border-b border-gray-300 "
              />
            </div>
            <div className="mb-4">
              <label>Message:</label>
              <textarea
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChanged}
                required
                rows={5}
                className="w-full p-2 outline-none border  border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-500 p-4 rounded hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-6 px-4">{status}</p>}
        </div>
      </Layout>
    </div>
  );
}
