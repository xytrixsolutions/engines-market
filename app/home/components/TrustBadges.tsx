import {
  FaTruckPickup,
  FaCertificate,
  FaUserShield,
  FaIndustry,
} from "react-icons/fa";
import { ReactElement } from "react";
import Container from "@/components/Container";

interface Badge {
  icon: ReactElement;
  title: string;
  description: string;
}

const badges: Badge[] = [
  {
    icon: <FaUserShield className="text-white text-4xl" />,
    title: "Verified UK Suppliers",
    description: "Trusted and authenticated vendors",
  },
  {
    icon: <FaIndustry className="text-white text-4xl" />,
    title: "12 Years Experience",
    description: "Proven track record in the industry",
  },
  {
    icon: <FaCertificate className="text-white text-4xl" />,
    title: "12–18 Months Warranty",
    description: "On all reconditioned engines",
  },
  {
    icon: <FaTruckPickup className="text-white text-4xl" />,
    title: "Pick-Up & Drop-Off",
    description: "Convenient services available",
  },
];

const TrustBadges = () => {
  return (
    <Container dark>
      <h2 className="text-3xl font-bold text-center text-charcoal-gray-muted mb-14">
        Why <span className="text-neon-red">Choose</span> Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="relative bg-white py-14 px-auto text-center rounded-xl shadow-md hover:shadow-lg transition"
            style={{
              boxShadow: "0 0 100px rgba(255, 255, 255, 0.35)", // <- even on all sides
              borderRadius: "1.5rem",
            }}
          >
            {/* Icon circle */}
            <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
              <div className="bg-black rounded-full w-22 h-22 flex items-center justify-center">
                {badge.icon}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-8">
              {badge.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{badge.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrustBadges;
