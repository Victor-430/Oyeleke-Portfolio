import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-[#092635] via-[#1B4242] to-[#092635]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4242]/20 via-[#5C8374]/20 to-[#092635]/20"></div>
        <div className="absolute inset-0">
          {/* Floating animated elements */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-20 top-20 h-16 w-16 rounded-full bg-[#5C8374]/30 blur-sm"
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-32 right-32 h-24 w-24 rounded-full bg-[#9EC8B9]/30 blur-sm"
          />
          <motion.div
            animate={{
              y: [-10, 30, -10],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-20 top-40 h-12 w-12 rounded-full bg-[#5C8374]/30 blur-sm"
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left Side - Name and Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="my-6 bg-gradient-to-r from-[#5C8374] to-[#9EC8B9] bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
          >
            OYELEKE VICTOR
          </motion.h1>

          <div className="mb-8 text-xl font-medium text-gray-300 md:text-2xl">
            <TypeWriter
              options={{
                strings: [
                  "Frontend Developer",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Typescript",
                  "Figma",
                  "Node",
                  "Firebase",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg leading-relaxed text-gray-400"
          >
            I build beautiful, responsive, and scalable web applications that
            deliver exceptional user experiences. I transform UI/UX wireframes
            and mockups into responsive, high-performing websites and scalabe
            code. <br />
            E-commerce, Landing Page, Fintech, Websites etc.
          </motion.p>
        </motion.div>

        {/* Right Side - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="h-80 w-80 rounded-full bg-gradient-to-r from-[#5C8374] to-[#9EC8B9] p-1"
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1B4242]">
                <span className="text-6xl">👨‍💻 </span>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#5C8374]"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#9EC8B9]"
            >
              <span className="text-xl">🚀</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-[#9EC8B9]"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-2 h-3 w-1 rounded-full bg-[#9EC8B9]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
