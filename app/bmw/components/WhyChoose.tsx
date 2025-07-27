import Container from "@/components/Container";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <Container className="py-16 px-4 md:px-8 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Engines Market?
          </h2>

          <p className="text-lg leading-relaxed">
            At Engines Market, we provide a wide range of BMW replacement
            engines, including both used and reconditioned options. Our platform
            connects you with the UK&apos;s most trusted engine suppliers and
            workshops, offering you highly competitive price quotes from
            multiple sellers.
          </p>

          <p className="leading-relaxed">
            By leveraging our network, you can save up to 40% on used and
            reconditioned engines as suppliers compete for your business.
          </p>
        </div>

        {/* Image Content */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/bmw/bmw.png"
            alt="BMW Engine"
            width={400}
            height={300}
            className="rounded-lg w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
