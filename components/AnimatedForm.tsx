// components/AnimatedForm.tsx
"use client";

import { useRouter } from "next/navigation"; // ✅ Safe: this is a Client Component
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Button from "./Button";
import * as motion from "motion/react-client";

export default function AnimatedForm() {
  const [registration, setRegistration] = useState("");
  const router = useRouter(); // ✅ useRouter used safely here

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (registration.trim()) {
      router.push(
        `/contact?reg=${encodeURIComponent(registration)}&source=form`,
      );
    }
  };

  return (
    <motion.div
      className="relative lg:col-span-2 max-w-xl lg:max-w-none mx-auto lg:mr-0 lg:ml-auto z-50 overflow-visible"
      style={{
        boxShadow: "0 0 100px rgba(255, 255, 255, 0.35)",
        borderRadius: "1.5rem",
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 -z-10 transform rotate-[4deg] scale-110 bg-[conic-gradient(from_221deg,white_0deg,white_50%,#ededed_50%,#ededed_100%)]"></div>

        <div className="relative p-6 sm:p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Enter Your Vehicle Registration To
            </h3>
            <h4 className="text-xl font-bold text-gray-900">
              Find Best Supplier Near You
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-4">
              <div className="relative w-full max-w-md">
                <div
                  className="flex items-center border-4 border-black rounded-md overflow-hidden bg-[#ffcb05]"
                  style={{
                    fontFamily: "'Charles Wright', sans-serif",
                    height: "5rem",
                  }}
                >
                  <div className="w-10 h-full relative flex-shrink-0 ml-[-1px]">
                    <Image
                      src="/Home/uknumberplate.png"
                      alt="UK Flag"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="REG HERE"
                    value={registration}
                    onChange={(e) =>
                      setRegistration(e.target.value.toUpperCase())
                    }
                    className="vehicle-inp w-full h-20 py-3 text-3xl font-bold placeholder:font-bold text-black placeholder-black bg-transparent focus:outline-none text-center placeholder:text-center"
                    onFocus={(e) => (e.target.placeholder = "")}
                    onBlur={(e) => (e.target.placeholder = "REG HERE")}
                  />
                </div>
              </div>
            </div>

            <p className="text-center text-gray-600 mb-6 leading-relaxed">
              Enter Your Vehicle Registration Number To Instantly Locate the
              Right Engine & Get Quotes From UK&apos;s Top Suppliers
            </p>

            <Button
              type="submit"
              variant="red"
              className="w-full mb-4 before:bg-white"
            >
              <span>Get Free Quote Now</span>
              <FiArrowUpRight className="w-5 h-5" />
            </Button>
          </form>

          <p className="text-center text-gray-600">
            {"Don't Have REG..? "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
