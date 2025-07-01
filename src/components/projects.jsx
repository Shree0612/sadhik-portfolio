import { motion } from "framer-motion";

const projects = [
  {
    name: "E-Commerce Web App",
    description:
      "A full-stack e-commerce platform with product listings, cart, and secure checkout.",
    tech: "React, Node.js, Express, MongoDB",
    github: "https://github.com/your-username/ecommerce",
    demo: "https://ecommerce-demo.netlify.app"
  },
  {
    name: "Food Delivery App",
    description:
      "Responsive food delivery app UI with menu, order tracking, and map integration.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/your-username/food-delivery",
    demo: "https://food-delivery-demo.netlify.app"
  },
  {
    name: "Student Job Portal (Collegemate)",
    description:
      "Job portal for students to explore internships and full-time jobs. Built during internship.",
    tech: "React, Tailwind CSS, Firebase",
    github: "https://github.com/your-username/collegemate-job-portal",
    demo: "https://collegemate-demo.netlify.app"
  }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen py-20 bg-white px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-indigo-600 mb-12">Projects</h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-start"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <span className="text-xs text-indigo-500 font-medium mb-4">{project.tech}</span>
            <div className="mt-auto flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="text-sm px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
