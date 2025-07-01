import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Intern",
    company: "Collegemate.io",
    duration: "Apr 2024 – Jun 2024",
    description:
      "Built a student job portal module using React and Firebase. Designed and integrated frontend components, collaborated on GitHub, and contributed to beta testing.",
  },
  {
    role: "Virtual Internship Trainee",
    company: "Salesforce",
    duration: "Jan 2024 – Mar 2024",
    description:
      "Completed virtual internship on CRM tools and business application modules. Gained hands-on experience in cloud-based customer engagement workflows.",
  },
];

const experience = () => {
  return (
    <motion.section
      id="experience"
      className="min-h-screen py-20 px-6 bg-gray-100 text-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-indigo-600 text-center mb-12">Experience</h2>

      <div className="max-w-4xl mx-auto space-y-10 border-l-4 border-indigo-500 pl-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            <div className="absolute -left-3 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-md group-hover:scale-110 transition"></div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-indigo-600 font-medium">{exp.company} | {exp.duration}</p>
              <p className="text-sm mt-2 text-gray-700">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default experience;
