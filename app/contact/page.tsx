"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import { submitForm } from "@/app/actions/submitForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
interface VehicleInfo {
  registration?: string;
  make?: string;
  model?: string;
  year?: string;
  fuelType?: string;
  engineCapacity?: string;
  data?: string; // This can be used to store additional data if needed
}

function VehicleServiceFormContent() {
  const searchParams = useSearchParams();
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    registration: "",
    make: "",
    model: "",
    year: "",
    fuelType: "",
    engineCapacity: "",
    data: "",
  });

  // 1. Add the loading state
  const [isFetchingVehicle, setIsFetchingVehicle] = useState(false);

  useEffect(() => {
    const regNumber = searchParams.get("reg");
    const source = searchParams.get("source");

    // Define the async function inside the effect
    const fetchVehicleData = async () => {
      // 3a. Set loading to true before the call
      setIsFetchingVehicle(true);
      try {
        const response = await axios.get(
          `/api/vehicle?reg=${encodeURIComponent(regNumber!)}`
        );
        if (response.data) {
          setVehicleInfo({
            registration: regNumber!,
            make: response.data.make || "",
            model: response.data.model || "",
            year: response.data.yearOfManufacture || "",
            fuelType: response.data.fuelType || "",
            engineCapacity: response.data.engineCapacity || "",
          });
        }
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
        // Even if API fails, set at least the registration
        setVehicleInfo((prev) => ({
          ...prev,
          registration: regNumber!,
        }));
      } finally {
        // 3b. Set loading to false after the call (success or failure)
        setIsFetchingVehicle(false);
      }
    };

    if (regNumber) {
      if (source === "form") {
        // When coming from registration input forms, fetch vehicle details
        // 3c. Call the async function
        fetchVehicleData();
      } else {
        // Validate and set data directly if not from form
        if (
          regNumber !== null &&
          regNumber !== undefined &&
          regNumber !== "" &&
          typeof regNumber === "string"
        ) {
          setVehicleInfo({
            data: regNumber,
          });
        }
        // Ensure loading state is false if not fetching via API
        setIsFetchingVehicle(false);
      }
    } else {
      // Ensure loading state is false if no regNumber
      setIsFetchingVehicle(false);
    }
    // Include setIsFetchingVehicle in the dependency array if it somehow changes,
    // but typically it's stable. The main dependency is searchParams.
  }, [searchParams]); // Add setIsFetchingVehicle here only if necessary, usually not.

  // ... (rest of the component logic)

  return (
    <Container className="min-h-[50vh]">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Show spinner or content based on loading state */}
          {isFetchingVehicle ? (
            <div className="flex flex-col justify-center items-center min-h-screen bg-white z-50 fixed inset-0">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-red"></div>
            </div>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-bold text-neon-red mb-2">
                Fast Turnaround & Warranty Backed Services
              </h1>
              <p className="text-charcoal-gray text-xl mb-4">
                Get back on the road with peace of mind!
              </p>
              {vehicleInfo.registration && (
                <div className="flex flex-col items-center gap-4">
                  {/* ... (vehicle details display) ... */}
                  <div className="flex items-center gap-4 flex-wrap justify-center">
                    {/* Vehicle Details */}
                    <p className="text-lg font-medium text-gray-700">
                      {[
                        vehicleInfo.make,
                        vehicleInfo.model,
                        vehicleInfo.year,
                        vehicleInfo.fuelType,
                        vehicleInfo.engineCapacity,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    </p>
                    {/* Number Plate */}
                    <div className="relative w-44">
                      <div className="absolute top-1/2 transform -translate-y-1/2">
                        <div className="w-8 h-12 relative">
                          <Image
                            src="/Home/uknumberplate.png"
                            alt="UK Flag"
                            fill
                            className="object-cover rounded-l-md"
                          />
                        </div>
                      </div>
                      <input
                        type="text"
                        value={vehicleInfo.registration || ""}
                        disabled
                        className="w-full text-center py-2.5 text-lg font-semibold text-gray-700 bg-[#ffcb05] border-2 border-black rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Form Section - Show form only when not fetching initial vehicle data */}
        {!isFetchingVehicle && (
          <form action={submitForm} className="gap-6">
            <div className="border border-gray-300 rounded-4xl p-6 bg-white shadow-2xl">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                REQUIRED DETAILS
              </h2>
              <p className="text-gray-600 mb-6">
                Ensure you&apos;re getting the most competitive price by
                comparing engine quotes from local and national suppliers,
                instantly.
              </p>
              {vehicleInfo.registration && (
                <>
                  <input type="hidden" name="make" value={vehicleInfo.make} />
                  <input type="hidden" name="model" value={vehicleInfo.model} />
                  <input type="hidden" name="year" value={vehicleInfo.year} />
                  <input
                    type="hidden"
                    name="fuel_type"
                    value={vehicleInfo.fuelType}
                  />
                  <input
                    type="hidden"
                    name="engine_capacity"
                    value={vehicleInfo.engineCapacity}
                  />
                  <input
                    type="hidden"
                    name="registration"
                    value={vehicleInfo.registration}
                  />
                </>
              )}
              {vehicleInfo.data && (
                <input type="hidden" name="data" value={vehicleInfo.data} />
              )}
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile (Whatsapp Number)*"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div>
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode*"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    We use this to locate trusted garages close to you
                  </p>
                </div>
              </div>
              {/* Shadcn Accordion */}
              <Accordion
                type="single"
                collapsible
                className="mt-6 border-t pt-4"
              >
                <AccordionItem value="optional-details" className="border-0">
                  <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    <div className="flex items-center gap-2 text-green-600 font-medium">
                      Optional Vehicle Details
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <div className="border border-gray-300 rounded-lg p-6 bg-gray-50 mt-6">
                      <h2 className="text-lg font-semibold text-gray-800 mb-6">
                        OPTIONAL DETAILS
                      </h2>
                      {/* Select Service */}
                      <div className="mb-6">
                        <h3 className="font-medium text-gray-700 mb-3">
                          Select service
                        </h3>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="part_supplied_fitted"
                              value="part_supplied_fitted"
                              className="mr-3 h-4 w-4"
                            />
                            <span className="text-gray-700">
                              Part Supplied & Fitted
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="supply_only"
                              value="supply_only"
                              className="mr-3 h-4 w-4"
                            />
                            <span className="text-gray-700">Supply Only</span>
                          </label>
                        </div>
                      </div>
                      {/* Select Engine Type */}
                      <div className="mb-6">
                        <h3 className="font-medium text-gray-700 mb-3">
                          Select engine type
                        </h3>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="new"
                              value="new"
                              className="mr-3 h-4 w-4"
                            />
                            <span className="text-gray-700">New</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="used"
                              value="used"
                              className="mr-3 h-4 w-4"
                            />
                            <span className="text-gray-700">Used</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="rebuilt"
                              value="rebuilt"
                              className="mr-3 h-4 w-4"
                            />
                            <span className="text-gray-700">Rebuilt</span>
                          </label>
                        </div>
                      </div>
                      {/* Does Your Vehicle Drive */}
                      <div className="mb-6">
                        <h3 className="font-medium text-gray-700 mb-3">
                          Does Your Vehicle Drive?
                        </h3>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="drives"
                              value="yes"
                              className="mr-3 h-4 w-4"
                            />
                            <span className="text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="drives"
                              value="no"
                              className="mr-3 h-4 w-4"
                            />
                            <span className="text-gray-700">No</span>
                          </label>
                        </div>
                      </div>
                      {/* Does Your Vehicle Require Collection */}
                      <div className="mb-6">
                        <h3 className="font-medium text-gray-700 mb-3">
                          Does Your Vehicle Require Collection?
                        </h3>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="requiresCollection"
                              value="yes"
                              className="mr-3 h-4 w-4"
                            />
                            <span className="text-gray-700">Yes</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="requiresCollection"
                              value="no"
                              className="mr-3 h-4 w-4"
                            />
                            <span className="text-gray-700">No</span>
                          </label>
                        </div>
                      </div>
                      {/* Note for Supplier */}
                      <div>
                        <h3 className="font-medium text-gray-700 mb-3">
                          Note for supplier:
                        </h3>
                        <textarea
                          name="note"
                          placeholder="Write here..."
                          className="w-full h-24 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Add any extra notes about your vehicle here.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* Submit Section */}
              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-4">
                  By clicking <strong>Get Quotes</strong>, you acknowledge that
                  you have read and agree to our{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
                <Button variant="red" className="w-full before:bg-white">
                  Request A Quote
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </Container>
  );
}

// The VehicleServiceForm wrapper component remains the same
export default function VehicleServiceForm() {
  return (
    <Suspense>
      <VehicleServiceFormContent />
    </Suspense>
  );
}
