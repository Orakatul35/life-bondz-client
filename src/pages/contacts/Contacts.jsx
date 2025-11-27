import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contacts = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 pt-28 pb-20 px-4">
      {/* HEADER */}
      <section className="text-center max-w-2xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Get in{" "}
          <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>

        <p className="text-lg text-gray-600 mt-5 leading-relaxed">
          We're always here to help with questions about biodata, matchmaking,
          memberships, or support. Our team replies fast and with care.
        </p>
      </section>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT — CONTACT CARDS */}
        <div className="lg:col-span-5 space-y-7">
          {[
            {
              icon: <FaPhoneAlt size={22} />,
              title: "Call Us",
              desc: "Sat – Thu (Bangladesh Time)",
              info: "+880 1768-635835",
              bg: "bg-rose-100 text-rose-600",
            },
            {
              icon: <FaEnvelope size={22} />,
              title: "Email",
              desc: "We respond within 12–24 hours",
              info: "support@lifebondz.com",
              bg: "bg-pink-100 text-pink-600",
            },
            {
              icon: <FaMapMarkerAlt size={22} />,
              title: "Office Address",
              desc: "Visit by appointment only",
              info: "Sylhet, Bangladesh",
              bg: "bg-purple-100 text-purple-600",
            },
            {
              icon: <FaClock size={22} />,
              title: "Working Hours",
              desc: "Sat – Thu",
              info: "10:00 AM – 8:00 PM",
              bg: "bg-orange-100 text-orange-600",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-7 bg-white/80 backdrop-blur-lg rounded-3xl border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex gap-6"
            >
              <div className={`p-4 rounded-2xl ${item.bg}`}>{item.icon}</div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 mt-1">{item.desc}</p>
                <p className="mt-2 font-semibold text-gray-800">{item.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — FORM */}
        <div className="lg:col-span-7 p-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>

          <p className="text-gray-600 mb-10">
            Fill out the form below, and our support team will get back to you
            as soon as possible.
          </p>

          <form className="space-y-7">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                className="w-full bg-white/50 backdrop-blur rounded-xl px-5 py-3 border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full bg-white/50 backdrop-blur rounded-xl px-5 py-3 border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
                placeholder="you@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Subject</label>
              <input
                type="text"
                className="w-full bg-white/50 backdrop-blur rounded-xl px-5 py-3 border border-gray-200 focus:ring-2 focus:ring-rose-500 transition"
                placeholder="What is your message about?"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                rows="5"
                className="w-full bg-white/50 backdrop-blur rounded-xl px-5 py-3 border border-gray-200 focus:ring-2 focus:ring-rose-500 transition"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-rose-600 to-pink-500 shadow-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* MAP */}
      <section className="max-w-7xl mx-auto mt-20 rounded-3xl overflow-hidden shadow-xl border border-white">
        <iframe
          title="LifeBondz Office Location"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          className="border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.094927548373!2d90.42654027477142!3d23.81438149190821"
        ></iframe>
      </section>
    </main>
  );
};

export default Contacts;
