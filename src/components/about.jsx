import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="h-screen flex items-center justify-center px-6 bg-white text-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m an ambitious MCA student with a strong foundation in computer applications.
          Currently pursuing my Master’s at <span className="font-semibold">Presidency University, Bangalore</span>,
          I’m driven by curiosity and a passion for solving real-world problems with scalable tech solutions.
          <br /><br />
          I bring experience across full-stack development, cloud deployment, and a mindset focused on continuous growth.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
