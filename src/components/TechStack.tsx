import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TypeScript", icon: "📘" },
    { name: "Next.js", icon: "▲" },
    { name: "Postman", icon: "📮" },
    { name: "Git", icon: "🔧" },
    { name: "Figma", icon: "🎯" },
    { name: "Firebase", icon: "🔥" },
  ];

  return (
    <section ref={ref} className="bg-[#1B4242] px-6 py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 bg-gradient-to-r from-[#5C8374] to-[#9EC8B9] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Technologies & Tools
          </h2>
          {/* <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Here are the libraries, frameworks, and tools I use to bring ideas
            to life
          </p> */}
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="cursor-pointer rounded-xl bg-[#092635] p-6 text-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#5C8374] hover:to-[#9EC8B9]"
            >
              <div className="mb-4 text-4xl">{tech.icon}</div>
              <h3 className="font-semibold text-white">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
