import { motion } from "framer-motion";
import { useState } from "react";
import BookingForm from "./BookingForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "Email", icon: "✉", url: "mailto:oluwatobivictor430@gmail.com" },
  ];

  return (
    <>
      <footer className="border-t border-[#1B4242] bg-[#092635] px-6 py-12">
        <div className="container mx-auto">
          <div className="grid items-center gap-8 md:grid-cols-3">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h3 className="mb-2 bg-gradient-to-r from-[#5C8374] to-[#9EC8B9] bg-clip-text text-2xl font-bold text-transparent">
                Oyeleke Victor
              </h3>
              <p className="text-gray-300">Frontend Developer</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B4242] text-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#5C8374] hover:to-[#9EC8B9]"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center md:text-right"
            >
              <p className="text-gray-300">
                © {currentYear} Oyeleke Victor. All rights reserved.
              </p>
              <p className="mt-2 text-sm tracking-wider text-gray-400">
                Built with React & Framer Motion
              </p>
            </motion.div>
          </div>

          {/* Additional Footer Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 border-t border-[#1B4242] pt-8 text-center"
          >
            <p className="mb-4 text-gray-300">
              Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingOpen(true)}
              className="rounded-lg bg-gradient-to-r from-[#1B4242] to-[#5C8374] px-8 py-3 font-medium text-white transition-all duration-300 hover:shadow-lg"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </footer>

      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default Footer;
