import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-gray-800"
      >
        Hi, I'm <span className="text-indigo-600">Sadhik</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-lg text-gray-600 max-w-xl"
      >
        MCA Graduate | Full-Stack Java Developer | Passionate about Scalable Solutions
      </motion.p>

      <motion.a
        href="/ResumeSadhik.pdf"
        download
        className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Download My Resume
      </motion.a>
    </section>
  );
};

export default Hero;
