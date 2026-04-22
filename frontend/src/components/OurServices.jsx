import { FaRobot, FaCalendarAlt, FaBoxOpen, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

export default function OurServices() {
  const services = [
    {
      title: "AI-Powered Customer Service",
      desc: "Automate 80% of routine queries and turn your support center into a revenue driver.",
      icon: <FaRobot />,
    },
    {
      title: "Automated Scheduling & Operations",
      desc: "Eliminate no-shows and recover thousands in lost revenue with intelligent automation.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Intelligent Inventory Management",
      desc: "Prevent stockouts and make data-driven decisions with predictive forecasting.",
      icon: <FaBoxOpen />,
    },
    {
      title: "Micro Tools & Extensions",
      desc: "Lightweight tools powered by AI to boost productivity.",
      icon: <FaTools />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      
      {/* Heading */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900">
          OUR SERVICES
        </h2>

        {/* Animated line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="h-1 bg-blue-600 mt-2 mb-4"
        />

        <p className="text-gray-600">
          Solve your biggest challenges with end-to-end AI solutions.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-xl mb-4">
              {service.icon}
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>

            <p className="text-gray-600 text-sm">
              {service.desc}
            </p>
          </motion.div>

        ))}
      </div>

      {/* Bottom Link */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <button className="text-blue-600 font-medium hover:underline">
          View all Services →
        </button>
      </motion.div>

    </section>
  );
}