Figma
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:9ebe878db1993a8fbdadf05de49e4588/directUpload/figma.png

firebase
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:eafb9372b0c4f8f987856780b6e6548b/directUpload/firebase.png

github
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:74049a502a3e449609ce1a23bb2f5b4a/directUpload/github.png

linkedin
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:1892a5dc10b5ff8d78132edcd1964df0/directUpload/linkedIn.png

postman
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:75d209ba20c822d6b6a94fddf7303d9b/directUpload/postman.png

next.js
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:244570914f653568926f3405dec900d1/directUpload/next.js_.png

tailwind
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:5bc4c108ad88574612cb06ca9df28490/directUpload/tailwind.png

next.js
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:244570914f653568926f3405dec900d1/directUpload/next.js_.png

twitter
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:01cd3a24de1a9fc3e3426e3e1b7470d6/directUpload/X.png

gmail
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:1acae05fb80510d4ae81301ac5c59e1e/directUpload/gmail.png

react
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:7f0479fc3fa14a80b03c1fd219cfe531/directUpload/react_img.png

typescript
https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:d46858007aff22c805b0e36b8abfd30b/directUpload/typescript.png


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
    apiKey: process.env.REACT_APP_OPTIMOLE_KEY || "",
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
      liveUrl: "https://hospital-management-system-eight-chi.vercel.app/",
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
      img: "",
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
                    className="h-[21rem] w-full bg-transparent"
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
