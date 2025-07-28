import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    {
      name: "React",
      icon: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:7f0479fc3fa14a80b03c1fd219cfe531/directUpload/react_img.png",
    },
    {
      name: "Tailwind CSS",
      icon: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:5bc4c108ad88574612cb06ca9df28490/directUpload/tailwind.png",
    },
    {
      name: "TypeScript",
      icon: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:d46858007aff22c805b0e36b8abfd30b/directUpload/typescript.png",
    },
    {
      name: "Next.js",
      icon: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:244570914f653568926f3405dec900d1/directUpload/next.js_.png",
    },
    {
      name: "Postman",
      icon: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:75d209ba20c822d6b6a94fddf7303d9b/directUpload/postman.png",
    },
    {
      name: "Git",
      icon: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:74049a502a3e449609ce1a23bb2f5b4a/directUpload/github.png",
    },
    {
      name: "Figma",
      icon: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:9ebe878db1993a8fbdadf05de49e4588/directUpload/figma.png",
    },
    {
      name: "Firebase",
      icon: "https://mlskg9hbc4ct.i.optimole.com/w:auto/h:auto/q:auto/id:eafb9372b0c4f8f987856780b6e6548b/directUpload/firebase.png",
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
            Technologies & Tools
          </h2>
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
              <img className="" src={tech.icon} alt={tech.name} />
              <h3 className="font-semibold text-white">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
