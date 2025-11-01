"use client";

import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Navbar from "../components/Navbar";
import FaqCard from "../components/FaqCard";
import MainFooter from "../components/MainFooter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const page = () => {
  const faqs = [
    "How we serve food?",
    "How can we get in touch with you?",
    "How is our food quality?",
    "What will be delivered? And When?",
    "How do we give home delivery?",
    "Is this restaurant 24 hours open?",
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar Section */}
      <div className="w-full flex justify-center items-center bg-[#0D0D0DF2]">
        <Navbar />
      </div>

      {/* Image Section */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] relative">
        <Image
          src="/menu1.png"
          alt="Menu Image"
          fill
          className="object-cover"
          quality={100}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            Frequently Asked Questions
          </h1>
          <div className="font-normal text-base md:text-lg text-white flex items-center gap-2 mt-2">
            Home <ChevronRight className="w-4 h-4" />{" "}
            <div className="text-[#FF9F0D]">FAQ</div>
          </div>
        </motion.div>
      </div>

      {/* FAQ Content */}
      <div className="w-full flex justify-center px-4 py-8 md:py-12 lg:py-16">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="font-helvetica font-bold text-3xl md:text-4xl lg:text-5xl text-center">
              Questions Looks Here
            </div>
            <div className="font-normal text-sm md:text-base mt-4 text-center max-w-2xl">
              Have a question about ordering, delivery, or our menu? We answer
              the most common questions here — if you still need help, contact
              our support team and we&apos;ll get back to you quickly.
            </div>
          </motion.div>

          <div className="w-full mt-8 md:mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <FaqCard name={faq} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-auto">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
