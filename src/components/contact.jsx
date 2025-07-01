// src/components/Contact.jsx
const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 py-20 px-6 text-center flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold text-indigo-600 mb-8">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-4">
        📞 <span className="font-medium">Phone:</span> +91 63021 81836
      </p>
      <p className="text-lg text-gray-700 mb-4">
        ✉️ <span className="font-medium">Email:</span> sadhikp999@gmail.com
      </p>
      <p className="text-lg text-gray-700">
        📍 Bangalore, Karnataka, India
      </p>
    </section>
  );
};

export default Contact;
