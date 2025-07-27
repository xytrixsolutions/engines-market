import Image from "next/image"

const WhyChoose = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold ">Why Choose EnginesMarket?</h2>

            <p className="text-lg leading-relaxed">
              At Engines Market, we provide a wide range of BMW replacement engines, including both used and
              reconditioned options. Our platform connects you with the UK&apos;s most trusted engine suppliers and
              workshops, offering you highly competitive price quotes from multiple sellers.
            </p>

            <p className="leading-relaxed">
              By leveraging our network, you can save up to 40% on used and reconditioned engines as suppliers compete
              for your business.
            </p>
          </div>

          {/* Image - Right Side */}
          <div className="flex justify-center">
            <Image
              src="/bmw/bmw.png"
              alt="BMW Engine"
              width={400}
              height={300}
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default WhyChoose;
