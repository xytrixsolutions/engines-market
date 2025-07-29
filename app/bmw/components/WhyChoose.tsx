import Accent from "@/components/Accent";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <Container className="py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div className="space-y-6">
          <Heading>
            Why Choose
            <Accent>Engines</Accent>
            Market?
          </Heading>

          <Paragraph>
            At <strong>Engines</strong> Market, we provide a wide range of{" "}
            <strong>BMW replacement engines</strong>, including both used and
            reconditioned options. Our platform connects you with the UK&apos;s{" "}
            <strong>most trusted</strong> engine suppliers and workshops,
            offering you <strong>highly competitive price quotes</strong> from
            multiple sellers.
          </Paragraph>

          <Paragraph>
            By leveraging our network, you can save up to <strong>40%</strong>{" "}
            on used and reconditioned engines as suppliers compete for your
            business.
          </Paragraph>
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
