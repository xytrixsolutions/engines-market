import Container from "@/components/Container";

const BlogCards = () => {
  return (
    <Container id="blog">
      <div data-aos="fade-right">
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6 text-center">
          Featured Blog Post -{" "}
          <span className="text-neon-red">Latest Engine Buying Guides</span>
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Stay informed with our expert guides and insider tips!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 – Featured Post */}
        <div
          className="bg-gray-50 p-6 rounded-2xl shadow-2xl transition"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Buying Guide For Engine
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Snippet from blog post - Learn everything you need to know about
            buying a used or reconditioned engine and how to get the best deal.
            Snippet from blog post - Learn everything you need to know about
            buying a used or reconditioned engine and how to get the best deal.
            Snippet from blog post - Learn everything you need to know about
            buying a used or reconditioned engine and how to get the best deal.
          </p>
          <a
            href="#"
            className="inline-block bg-[#EB0808] hover:bg-transparent border-2 border-[#EB0808] rounded-4xl px-5 py-2 text-white hover:text-[#EB0808] font-medium mt-10 transition-all duration-300"
          >
            Read More →
          </a>
        </div>

        {/* Card 2 – Related Topics */}
        <div
          className="bg-[#1E3A8A] p-6 rounded-2xl shadow-2xl transition"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            Buying Guide For Engine
          </h3>
          <p className="text-white text-sm mb-4">
            Snippet from blog post - Learn everything you need to know about
            buying a used or reconditioned engine and how to get the best deal.
            Snippet from blog post - Learn everything you need to know about
            buying a used or reconditioned engine and how to get the best deal.
            Snippet from blog post - Learn everything you need to know about
            buying a used or reconditioned engine and how to get the best deal.
          </p>
          <a
            href="#"
            className="inline-block bg-[#EB0808] hover:bg-transparent border-2 border-[#EB0808] rounded-4xl px-5 py-2 text-white font-medium mt-10 transition-all duration-300"
          >
            Read More →
          </a>
        </div>

        {/* Card 3 – Related Topics Continued */}
        <div
          className="bg-gray-50 p-6 rounded-2xl shadow-2xl transition"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Buying Guide For Engine
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Snippet from blog post - Learn everything you need to know about
            buying a used or reconditioned engine and how to get the best deal.
            Snippet from blog post - Learn everything you need to know about
            buying a used or reconditioned engine and how to get the best deal.
            Snippet from blog post - Learn everything you need to know about
            buying a used or reconditioned engine and how to get the best deal.
          </p>
          <a
            href="#"
            className="inline-block bg-[#EB0808] hover:bg-transparent border-2 border-[#EB0808] rounded-4xl px-5 py-2 text-white hover:text-[#EB0808] font-medium mt-10 transition-all duration-300"
          >
            Read More →
          </a>
        </div>
      </div>
    </Container>
  );
};

export default BlogCards;
