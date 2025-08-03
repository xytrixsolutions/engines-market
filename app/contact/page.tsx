import Button from "@/components/Button";
import Container from "@/components/Container";
import { submitForm } from "@/app/actions/submitForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";

export default function VehicleServiceForm() {
  const response = axios.get(
    " https://api.checkcardetails.co.uk/vehicledata/vehicleregistration?apikey=b627ac2f1dfb771559815c03e3161e91&vrm=EA65AMX ",
  );
  return (
    <Container>
      <div className="max-w-4xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-neon-red mb-2">
            Fast Turnaround & Warranty Backed Services
          </h1>
          <p className="text-charcoal-gray text-xl mb-2">
            Get back on the road with peace of mind!
          </p>
          <p className="text-gray-600">
            Audi 2021 Audi A1 Petrol Cylinder Head
          </p>
        </div>

        {/* Form Section */}
        <form action={submitForm} className="gap-6">
          <div className="border border-gray-300 rounded-4xl p-6 bg-white shadow-2xl">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              REQUIRED DETAILS
            </h2>

            <p className="text-gray-600 mb-6">
              Ensure you&apos;re getting the most competitive price by comparing
              engine quotes from local and national suppliers — instantly.
            </p>

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
            <Accordion type="single" collapsible className="mt-6 border-t pt-4">
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
                            type="radio"
                            name="service"
                            value="partSupplied"
                            className="mr-3 h-4 w-4"
                          />
                          <span className="text-gray-700">
                            Part Supplied & Fitted
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="service"
                            value="supplyOnly"
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
                            type="radio"
                            name="engineType"
                            value="new"
                            className="mr-3 h-4 w-4"
                          />
                          <span className="text-gray-700">New</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="engineType"
                            value="used"
                            className="mr-3 h-4 w-4"
                          />
                          <span className="text-gray-700">Used</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="engineType"
                            value="reconditioned"
                            className="mr-3 h-4 w-4"
                          />
                          <span className="text-gray-700">Reconditioned</span>
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
      </div>
    </Container>
  );
}
