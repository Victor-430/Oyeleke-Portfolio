import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { useOptimole } from "../utils/useOptimole";
import OptimoleImage from "./OptimoleImage";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useOptimole({
    apiKey: import.meta.env.REACT_APP_OPTIMOLE_KEY || "",

    quality: "85",
  });

  const projects = [
    {
      img: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:35143f525187a7b74ce0c712cf5808b0/directUpload/Screenshot_2-7-2025_41828_hospital-management-app-web.vercel.app_.jpeg",
      title: "Hospital Management",
      description: "An healthcare management system with role-based access",
      TechStack:
        "Next.js, Typescript, Tailwind CSS, Framer motion, MongoDB, Express.js",

      gradient: "from-[#1B4242] to-[#5C8374]",
      liveUrl: "https://hospital-management-app-web.vercel.app/",
    },
    {
      img: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:e79257432520a37921039e5967747857/directUpload/Screenshot_2-7-2025_43210_shopify-kappa-blue.vercel.app_.jpeg",
      title: "Shopify Store",
      description:
        "E-commerce platform with modern design, user authentication, cart management, checkout process",
      TechStack: "React, Tailwind CSS, Firebase",

      gradient: "from-[#1B4242] to-[#5C8374]",
      liveUrl: "https://shopify-kappa-blue.vercel.app/",
    },
    {
      img: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:b163a2eadc364fb4cf8c3a827c5a2232/directUpload/IP-adress-tracker.jpg",
      title: "IP Locator",
      description: "Real-time IP address tracking and geolocation service",
      TechStack: "React, Tailwind CSS, Typescript",

      gradient: "from-[#1B4242] to-[#5C8374]",
      liveUrl: "https://ip-tracker-location.vercel.app/",
    },
    {
      img: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:c7543526b6ac3c1798c530e5cb4f0425/directUpload/Screenshot_2-7-2025_43028_easy-bank-rouge.vercel.app_.jpeg",
      title: "Easy Bank",
      description:
        "A website show casing the product and services of a Fintech bank",
      TechStack: "React, Tailwind CSS, Typescript",

      gradient: "from-[#1B4242] to-[#5C8374]",
      liveUrl: "https://easy-bank-rouge.vercel.app/",
    },
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
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#092635] p-8"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
              />

              {/* Content */}
              <div className="relative z-10">
                {project.img && (
                  <OptimoleImage
                    src={project.img}
                    width={800}
                    height={600}
                    alt={project.title}
                    className="bg-gray-300"
                  />
                )}
                <h3 className="my-4 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-300">
                  {project.description}
                </p>
                <div className="mb-6 text-lg md:text-xl">
                  {project.TechStack}
                </div>
                {/* Live Project Button */}
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${project.gradient} rounded-lg px-6 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg`}
                >
                  <ExternalLink size={18} />
                  <span>View Live</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
