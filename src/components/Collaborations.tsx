import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import OptimoleImage from "./OptimoleImage";


const Collaborations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

useOptimole({
    apiKey: import.meta.env.REACT_APP_OPTIMOLE_KEY || "",

    quality: "85",
  });

  
  const roles = [
    "UI/UX Designer",
    "Backend Developer",
    "Product Designer",
    "AI/ML Engineer",
    "Cyber Security",
    "Data Science",
    "Cloud Computing",
  ];

  imgUrl = "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:d3b9980d55a1abd36d949c6a125030db/directUpload/Screenshot_2-7-2025_42144_hospital-management-app-web.vercel.app_.jpeg"

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
            Collaborations
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Worked on a Hospital Management System as part of 3MTT Internship
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl bg-[#1B4242] p-8"
          >
          <OptimoleImage
                    src={imgUrl}
                    width={800}
                    height={600}
                    alt="hospital management system"
                    className="h-[21rem] w-full bg-gray-300"
                  />
            
            <h3 className="my-6 text-2xl font-bold text-[#9EC8B9]">
              Hospital Management System
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-[#5C8374]">✓</span>
                <span className="text-gray-300">
                  Role-based authentication system
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#5C8374]">✓</span>
                <span className="text-gray-300">
                  Patient appointment booking
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#5C8374]">✓</span>
                <span className="text-gray-300">
                  Doctor appointment tracking
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#5C8374]">✓</span>
                <span className="text-gray-300">
                  Nurse vitals & lab results management
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#5C8374]">✓</span>
                <span className="text-gray-300">
                  Admin & Super Admin dashboards
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 space-y-3 rounded-lg bg-[#092635] p-4 tracking-wider"
          >
            <h3 className="text-center font-medium tracking-wider">
              Tech Stack
            </h3>
            <p className="text-sm text-gray-300">
              <strong className="text-[#9EC8B9]">Frontend:</strong> Git & GitHub
              for version control and collaboration, Next.js,
              Typescript,Tailwind Css.
            </p>
            <p className="text-sm text-gray-300">
              <strong className="mr-1 text-[#9EC8B9]">Backend:</strong>
              MongoDb for database, Express.js.
            </p>
            <p className="text-sm text-gray-300">
              <strong className="mr-1 text-[#9EC8B9]">Deployment:</strong>
              Vercel for Frontend and Render for Backend
            </p>
          </motion.div>

          {/* Team Collaboration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="mb-6 text-2xl font-bold text-[#9EC8B9]">
              Collaborated With
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="rounded-lg bg-gradient-to-r from-[#1B4242] to-[#5C8374] p-4 font-medium text-white"
                >
                  {role}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
