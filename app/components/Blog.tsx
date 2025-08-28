/* eslint-disable @typescript-eslint/no-explicit-any */
/* import Container from "@/components/Container"; */
/* import * as motion from "motion/react-client"; */
/**/
/* const cards = [ */
/*   { */
/*     bg: "bg-gray-50", */
/*     titleColor: "text-gray-800", */
/*     textColor: "text-gray-600", */
/*     buttonExtra: "hover:text-[#EB0808]", */
/*     delay: 100, */
/*   }, */
/*   { */
/*     bg: "bg-[#1E3A8A]", */
/*     titleColor: "text-white", */
/*     textColor: "text-white", */
/*     buttonExtra: "", */
/*     delay: 200, */
/*   }, */
/*   { */
/*     bg: "bg-gray-50", */
/*     titleColor: "text-gray-800", */
/*     textColor: "text-gray-600", */
/*     buttonExtra: "hover:text-[#EB0808]", */
/*     delay: 300, */
/*   }, */
/* ]; */
/**/
/* const snippet = */
/*   "Snippet from blog post - Learn everything you need to know about buying a used or reconditioned engine and how to get the best deal. ".repeat( */
/*     3, */
/*   ); */
/**/
/* const BlogCards = () => { */
/*   // Animation variants for staggered card appearance */
/*   const containerVariants = { */
/*     hidden: { opacity: 0 }, */
/*     visible: { */
/*       opacity: 1, */
/*       transition: { */
/*         staggerChildren: 0.1, // 100ms between each child (matches your 100ms increment) */
/*         delayChildren: 0.1, // optional: slight delay before first item */
/*       }, */
/*     }, */
/*   }; */
/**/
/*   const cardVariants = { */
/*     hidden: { y: 50, opacity: 0 }, */
/*     visible: { */
/*       y: 0, */
/*       opacity: 1, */
/*       transition: { */
/*         type: "spring" as any, */
/*         stiffness: 100, */
/*         damping: 15, */
/*         // delay applied individually via card.delay */
/*       }, */
/*     }, */
/*   }; */
/**/
/*   return ( */
/*     <Container id="blog"> */
{
  /* Header with fade-in */
}
/*       <motion.div */
/*         initial={{ opacity: 0, y: 30 }} */
/*         whileInView={{ opacity: 1, y: 0 }} */
/*         viewport={{ once: true, amount: 0.2 }} */
/*         transition={{ duration: 0.6 }} */
/*         className="text-center mb-6 md:mb-12" */
/*       > */
/*         <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-6"> */
/*           Featured Blog Post -{" "} */
/*           <span className="text-neon-red">Latest Engine Buying Guides</span> */
/*         </h2> */
/*         <p className="text-center text-gray-500"> */
/*           Stay informed with our expert guides and insider tips! */
/*         </p> */
/*       </motion.div> */
/**/
{
  /* Card Grid with Staggered Animation */
}
/*       <motion.div */
/*         className="grid grid-cols-1 md:grid-cols-3 gap-8" */
/*         variants={containerVariants} */
/*         initial="hidden" */
/*         whileInView="visible" */
/*         viewport={{ once: true, amount: 0.1 }} */
/*       > */
/*         {cards.map(({ bg, titleColor, textColor, buttonExtra, delay }, i) => ( */
/*           <motion.div */
/*             key={i} */
/*             className={`${bg} p-6 rounded-2xl shadow-2xl`} */
/*             variants={cardVariants} */
/*             transition={{ */
/*               delay: delay / 1000, // Convert ms to seconds (100ms = 0.1s) */
/*               duration: 0.6, */
/*               ease: "easeOut" as const, */
/*             }} */
/*           > */
/*             <h3 className={`text-xl font-semibold ${titleColor} mb-3`}> */
/*               Buying Guide For Engine */
/*             </h3> */
/*             <p className={`${textColor} text-sm mb-4`}>{snippet}</p> */
/*             <a */
/*               href="#" */
/*               className={`inline-block bg-[#EB0808] hover:bg-transparent border-2 border-[#EB0808] rounded-4xl px-5 py-2 text-white ${buttonExtra} font-medium mt-10 transition-all duration-300`} */
/*             > */
/*               Read More → */
/*             </a> */
/*           </motion.div> */
/*         ))} */
/*       </motion.div> */
/*     </Container> */
/*   ); */
/* }; */
/**/
/* export default BlogCards; */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { getFeaturedPosts } from "@/lib/wordpressHelpers";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

// SSR-safe HTML entity decoder
function decodeHTMLEntities(text: string): string {
  const entities: Record<string, string> = {
    "&amp;": "&",
    "<": "<",
    ">": ">",
    "&quot;": '"',
    "&#039;": "'",
    "&#8217;": "’",
    "&#8216;": "‘",
    "&#8220;": "“",
    "&#8221;": "”",
    "&#8211;": "–",
    "&#8212;": "—",
    "&nbsp;": " ",
    "&#8230;": "…",
    "&hellip;": "…",
  };

  return text.replace(/&[^;]+;/g, (match) => entities[match] || match);
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as any,
      stiffness: 120,
      damping: 16,
      duration: 0.6,
      ease: "easeOut" as any,
    },
  },
};

const BlogCards = async () => {
  const posts = await getFeaturedPosts();

  return (
    <Container id="blog">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal-gray mb-4">
          Featured Blog Post -{" "}
          <span className="text-neon-red">Latest Engine Buying Guides</span>
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto">
          Stay informed with our expert guides and insider tips!
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {posts.length > 0 ? (
          posts.map((post: any, i: number) => {
            const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const date = new Date(post.date).toLocaleDateString();
            const time = new Date(post.date).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            const excerptHTML =
              post.excerpt?.rendered || post.content?.rendered || "";
            const plainExcerpt = decodeHTMLEntities(
              excerptHTML.replace(/<[^>]*>/g, ""),
            );
            const truncatedExcerpt =
              plainExcerpt.length > 120
                ? `${plainExcerpt.substring(0, 120)}...`
                : plainExcerpt;

            return (
              <motion.div
                key={post.id}
                variants={cardVariants}
                transition={{
                  delay: (100 + i * 100) / 1000, // 0.1s, 0.2s, 0.3s
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Featured Image */}
                {image && (
                  <div className="relative h-54 w-full mb-4 rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={post.title.rendered}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      unoptimized
                    />
                  </div>
                )}

                {/* Date & Time */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                  </svg>
                  <span>{date}</span>
                  <svg
                    className="w-4 h-4 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.106A1 1 0 008 8v4a1 1 0 001.555.894l3-2a1 1 0 000-1.788l-3-2z" />
                  </svg>
                  <span>{time}</span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-blue-900 mb-3 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {truncatedExcerpt}
                </p>

                {/* Read More Button */}
                <Link
                  href={`/blog/${post.id}`}
                  className="w-max bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full transition-colors duration-200 flex items-center justify-center"
                >
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4 ml-2 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
            );
          })
        ) : (
          // Fallback if no posts
          <div className="col-span-3 text-center text-gray-500 py-8">
            No blog posts available.
          </div>
        )}
      </motion.div>
    </Container>
  );
};

export default BlogCards;
