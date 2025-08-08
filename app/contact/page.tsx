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
import { Suspense, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
interface VehicleInfo {
  registration?: string;
  make?: string;
  model?: string;
  year?: string;
  fuelType?: string;
  engineCapacity?: string;
  data?: string; // This can be used to store additional data if needed
}

enum OPTIONS {
  model_name = "model_name",
  model = "model",
  engineCode = "engineCode",
  reg = "reg",
  success = "success",
}
const checkFalsy = (param: unknown) =>
  param !== null &&
  param !== undefined &&
  param !== "" &&
  typeof param === "string";

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

  const [isFetchingVehicle, setIsFetchingVehicle] = useState(false);
  const get = useCallback(
    (param: string) => searchParams.get(param) || "",
    [searchParams],
  );

  const regNumber = get(OPTIONS.reg) || "";
  const model_name = get(OPTIONS.model_name);
  const model = get(OPTIONS.model);
  const engineCode = get(OPTIONS.engineCode);
  const success = get(OPTIONS.success);
  const data = model || model_name || engineCode;
  const router = useRouter();

  useEffect(() => {
    if (success === "true") {
      toast.success("Form submitted successfully", {
        position: "top-right",
      });
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete(OPTIONS.success);
      router.replace(`?${newParams.toString()}`, { scroll: false });
    } else if (success === "false") {
      toast.error("Unexpected error occured", {
        position: "top-right",
      });
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete(OPTIONS.success);
      router.replace(`?${newParams.toString()}`, { scroll: false });
    }
  }, [success, searchParams, router]);
  useEffect(() => {
    const fetchVehicleData = async () => {
      setIsFetchingVehicle(true);
      try {
        // const response = await axios.get(
        //   `/api/vehicle?reg=${encodeURIComponent(regNumber!)}`,
        // );
        // WARN: Do not Remove this comment, this is for testing in order to avoid API calls
        const response = {
          data: {
            registrationNumber: "EA65AMX",
            make: "BMW",
            model: "X5 SPORT D AUTO",
            colour: "BLACK",
            fuelType: "DIESEL",
            engineCapacity: "2993",
            yearOfManufacture: "2006",
            vehicleAge: "15 Years 2 Months",
            wheelplan: "2 AXLE RIGID BODY",
            dateOfLastV5CIssued: "2021-12-15",
            typeApproval: "M1",
            co2Emissions: 250,
            registrationPlace: "Birmingham",
            tax: {
              taxStatus: "Untaxed",
              taxDueDate: "2021-09-07",
              days: "108",
            },
            mot: {
              motStatus: "Valid",
              motDueDate: "2022-07-05",
              days: 193,
            },
          },
        };
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
        setIsFetchingVehicle(false);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
        setVehicleInfo((prev) => ({
          ...prev,
          registration: regNumber!,
        }));
      } finally {
        setIsFetchingVehicle(false);
      }
    };

    if (regNumber && checkFalsy(regNumber)) {
      fetchVehicleData();
    } else if (data && checkFalsy(data)) {
      console.log("data ===>", data);
      setVehicleInfo({ data });
    }
  }, [get, data, regNumber]); // Add setIsFetchingVehicle here only if necessary, usually not.

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
              {vehicleInfo && (
                <div className="flex flex-col items-center gap-4">
                  {/* ... (vehicle details display) ... */}
                  <div className="flex flex-col items-center gap-2">
                    {/* Vehicle Details - All on one line centered */}
                    <div className="flex items-center gap-2 flex-wrap justify-center">
                      <p className="text-md font-semibold text-neon-red">
                        {(() => {
                          if (model) return "Model:";
                          if (model_name) return "Model Name:";
                          if (engineCode) return "Engine Code:";
                        })()}
                      </p>
                      <p className="text-sm font-medium text-gray-500">
                        {[
                          vehicleInfo.make,
                          vehicleInfo.model,
                          vehicleInfo.year,
                          vehicleInfo.fuelType,
                          vehicleInfo.engineCapacity &&
                            (
                              parseFloat(vehicleInfo.engineCapacity) / 1000
                            ).toFixed(1) + "L",
                          vehicleInfo.data,
                        ]
                          .filter(Boolean)
                          .map((item = "", idx) => {
                            if (idx === 4) return item;
                            return item.replace(
                              /\w\S*/g,
                              (txt) =>
                                txt.charAt(0).toUpperCase() +
                                txt.substr(1).toLowerCase(),
                            );
                          })
                          .join(", ")}
                      </p>
                    </div>

                    {/* Number Plate - On next line, centered */}
                    {vehicleInfo.registration && (
                      <div
                        className="flex items-center w-32 h-9 bg-[#ffcb05] border-2 border-black rounded-md overflow-hidden mt-2"
                        style={{
                          fontFamily: "'Charles Wright', sans-serif",
                          letterSpacing: "0.8px", // helps maintain number plate spacing at small size
                        }}
                      >
                        {/* UK Flag Strip - Slimmer */}
                        <div className="w-5 h-full relative flex-shrink-0">
                          <Image
                            src="/Home/uknumberplate.png"
                            alt="UK Flag"
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Registration Display */}
                        <input
                          type="text"
                          value={vehicleInfo.registration || ""}
                          disabled
                          className="w-full text-center text-sm font-bold text-black bg-transparent border-none outline-none pointer-events-none"
                          style={{ letterSpacing: "1px" }}
                        />
                      </div>
                    )}
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
function VehicleServiceForm() {
  return (
    <Suspense
      fallback={
        !useSearchParams().get(OPTIONS.reg) ? (
          <div className="flex flex-col justify-center items-center min-h-screen bg-white z-50 fixed inset-0">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon-red"></div>
          </div>
        ) : null
      }
    >
      <VehicleServiceFormContent />
    </Suspense>
  );
}
export default function Page() {
  return (
    <Suspense>
      <VehicleServiceForm />
    </Suspense>
  );
}
