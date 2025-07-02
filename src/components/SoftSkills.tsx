import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SoftSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      name: "Team Work",
      icon: "🤝",
      description: "Collaborative mindset with excellent interpersonal skills",
      color: "from-[#5C8374] to-[#9EC8B9]",
    },
    {
      name: "Communication",
      icon: "💬",
      description:
        "I speak and communicate clearly ensuring the message i pass across is clearly understood.",
      color: "from-[#1B4242] to-[#5C8374]",
    },
    {
      name: "Problem Solving",
      icon: "🧩",
      description: "Analytical thinking and creative solution.",
      color: "from-[#5C8374] to-[#9EC8B9]",
    },
  ];

  return (
    <section ref={ref} className="bg-[#092635] px-6 py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 bg-gradient-to-r from-[#5C8374] to-[#9EC8B9] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Soft Skills
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`mx-auto mb-6 h-24 w-24 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-4xl transition-shadow duration-300 group-hover:shadow-2xl`}
              >
                {skill.icon}
              </motion.div>

              <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#9EC8B9]">
                {skill.name}
              </h3>

              <p className="leading-relaxed text-gray-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
