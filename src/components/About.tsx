import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const interests = [
    { name: "Reading Books", icon: "📚" },
    { name: "Playing Guitar", icon: "🎸" },
    { name: "Movies", icon: "🎬" },
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
            About Me
          </h2>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="rounded-2xl bg-[#092635] p-8">
              <h3 className="mb-6 text-2xl font-bold text-[#9EC8B9]">
                My Story
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                I convert designs into webpages that are beautiful, responsive,
                scalable, and performant. I am a fun person to work with and I
                enjoy solving problems. I am also curious about things and
                always eager to learn new technologies and approaches.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-300">
                I love frontend development because i able to convert visual
                designs into a product that the user can interact with. Frontend
                isn't just about coding for me, it is a way for me to express my
                creativity and art to a wider audience.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                When I'm not coding, I love reading books to expand my knowledge
                and playing the guitar to unwind and express my creativity.
                These hobbies help me maintain a balanced perspective and often
                inspire my approach to development.
              </p>
            </div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="mb-8 text-center text-2xl font-bold text-[#9EC8B9]">
              When I'm Not Coding
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="cursor-pointer rounded-xl bg-gradient-to-br from-[#1B4242] to-[#5C8374] p-6 text-center"
                >
                  <div className="mb-3 text-4xl">{interest.icon}</div>
                  <h4 className="font-semibold text-white">{interest.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-gradient-to-r from-[#092635] to-[#1B4242] p-8">
            <h3 className="mb-6 text-2xl font-bold text-white">Core Values</h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <div className="text-3xl">🎯</div>
                <h4 className="font-semibold text-[#9EC8B9]">Quality</h4>
                <p className="text-sm text-gray-300">
                  Delivering excellence in every project
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🚀</div>
                <h4 className="font-semibold text-[#5C8374]">Innovation</h4>
                <p className="text-sm text-gray-300">
                  Embracing new technologies and methods
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🤝</div>
                <h4 className="font-semibold text-[#9EC8B9]">Collaboration</h4>
                <p className="text-sm text-gray-300">
                  Building strong partnerships and teams
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
