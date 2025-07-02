import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DevelopmentApproach = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const approaches = [
    {
      title: "Foundation",

      items: [
        "Understand the main point of the project",
        "Convert UI/UX mockups into websites",
        "Make it seamless for user experience and responsive",
        "Iterate on feedback",
      ],
      gradient: "from-[#5C8374] to-[#9EC8B9]",
    },
    {
      title: "Performance & Optimization",

      items: [
        "Focus on load times and image optimization",
        "Implement code splitting for better performance",
      ],
      gradient: "from-[#1B4242] to-[#5C8374]",
    },
    {
      title: "Accessibility",

      items: [
        "Build accessibility into the initial development process",
        "Ensure keyboard navigation",
        "Use semantic HTML and proper ARIA labels",
      ],
      gradient: "from-[#5C8374] to-[#9EC8B9]",
    },
    {
      title: "Code Architecture",

      items: [
        "I write reusable components",
        "I write maintainable and scalable code",
        "Follow consistent coding standards and patterns",
      ],
      gradient: "from-[#1B4242] to-[#5C8374]",
    },
    {
      title: "Cross-Browser Compatibility",

      items: [
        "Test early and often across Chrome, Firefox, Safari, and Edge",
        "Watch for CSS Grid, Flexbox, and JavaScript compatibility issues",
        "Use browser dev tools for debugging",
        "Test on actual devices, especially mobile Safari",
      ],
      gradient: "from-[#5C8374] to-[#9EC8B9]",
    },
    {
      title: "Collaboration & Workflow",

      items: [
        "Establish smooth feedback review processes",
        "Communicate clearly when working with a team",
        "Create clear documentation for handoffs",
        "Github for Version control and collaboration",
        "Code testing",
        "Deployment",
      ],
      gradient: "from-[#1B4242] to-[#5C8374]",
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
            My Development Approach
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-[#1B4242] p-6"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${approach.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-bold text-white">
                  {approach.title}
                </h3>
                <ul className="space-y-3">
                  {approach.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + itemIndex * 0.05,
                      }}
                      className="flex items-start space-x-3 text-sm text-gray-300"
                    >
                      <span className="mt-1 text-[#9EC8B9]">•</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-[#1B4242] to-[#092635] p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">Summary</h3>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-300">
              This approach ensures every project delivers exceptional user
              experiences while maintaining high code quality, performance
              standards, and accessibility for users. From initial concept to
              final deployment, each phase is carefully considered and executed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevelopmentApproach;
