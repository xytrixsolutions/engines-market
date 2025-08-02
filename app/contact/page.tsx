"use client"

import Button from "@/components/Button"
import Container from "@/components/Container"
import { FiChevronDown } from "react-icons/fi"
import type React from "react"
import { useState } from "react"

export default function VehicleServiceForm() {
  const [formData, setFormData] = useState({
    service: "",
    engineType: "",
    drives: "",
    requiresCollection: "",
    note: "",
    name: "",
    mobile: "",
    email: "",
    postcode: "",
  })

  const [showOptional, setShowOptional] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Container>
      <div className="max-w-4xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neon-red mb-2">
            Fast Turnaround & Warranty Backed Services
          </h1>
          <p className="text-charcoal-gray text-xl mb-2">Get back on the road with peace of mind!</p>
          <p className="text-gray-600">Audi 2021 Audi A1 Petrol Cylinder Head</p>
        </div>

        {/* Form Section */}
        <div className="gap-6">
          {/* Required Details */}
          <div className="border border-gray-300 rounded-4xl p-6 bg-white shadow-2xl">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">REQUIRED DETAILS</h2>

            <p className="text-gray-600 mb-6">
              Ensure you're getting the most competitive price by comparing engine quotes from local and national
              suppliers — instantly.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name*"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Mobile (Whatsapp Number)*"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address*"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div>
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  placeholder="Postcode*"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  We use this to locate trusted garages close to you
                </p>
              </div>
            </div>

            {/* Accordion Toggle */}
            <div
              onClick={() => setShowOptional(!showOptional)}
              className="mt-6 flex items-center gap-2 cursor-pointer border-t pt-4"
            >
              <span className="text-green-600 font-medium">Optional Vehicle Details</span>
              <FiChevronDown
                className={`text-green-600 transition-transform duration-300 ${
                  showOptional ? "rotate-180" : ""
                }`}
                size={22}
              />
            </div>

            {/* Accordion Content */}
            {showOptional && (
              <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 mt-6 transition-all duration-300">
                <h2 className="text-lg font-semibold text-gray-800 mb-6">OPTIONAL DETAILS</h2>

                {/* Select Service */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Select service</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" name="partSupplied" className="mr-3 h-4 w-4" />
                      <span className="text-gray-700">Part Supplied & Fitted</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="supplyOnly" className="mr-3 h-4 w-4" />
                      <span className="text-gray-700">Supply Only</span>
                    </label>
                  </div>
                </div>

                {/* Select Engine Type */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Select engine type</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" name="new" className="mr-3 h-4 w-4" />
                      <span className="text-gray-700">New</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="used" className="mr-3 h-4 w-4" />
                      <span className="text-gray-700">Used</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="reconditioned" className="mr-3 h-4 w-4" />
                      <span className="text-gray-700">Reconditioned</span>
                    </label>
                  </div>
                </div>

                {/* Does Your Vehicle Drive */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Does Your Vehicle Drive?</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="drives"
                        value="yes"
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="drives"
                        value="no"
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Does Your Vehicle Require Collection */}
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-3">Does Your Vehicle Require Collection?</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="requiresCollection"
                        value="yes"
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4"
                      />
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="requiresCollection"
                        value="no"
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4"
                      />
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* Note for Supplier */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Note for supplier:</h3>
                  <textarea
                    name="note"
                    value={formData.note}
                    onChange={handleInputChange}
                    placeholder="Write here..."
                    className="w-full h-24 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Add any extra notes about your vehicle here.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Section */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-4">
                By clicking "Get Quotes," you acknowledge that you have read and agree to our{" "}
                <a href="#" className="text-blue-600 underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 underline">
                  Privacy Policy
                </a>
                .
              </p>

              <Button className="w-full mt-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
