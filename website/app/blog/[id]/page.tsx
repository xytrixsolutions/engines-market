/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { getPost, getRelatedPosts } from "@/lib/wordpressHelpers";

interface Params {
  id: string;
}

const BlogDetailPage = async (props: { params: Promise<Params> }) => {
  const params = await props.params;
  const { id } = params;
  const post = await getPost(id);
  const relatedPosts = await getRelatedPosts(post?.categories[0] || 1);

  if (!post) {
    notFound();
  }

  // Extract featured image
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  // Format date
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Get category name
  const categoryName = post.categories[0] === 1 ? "Range Rover" : "Jaguar";

  // Reading time estimate
  const readingTime = Math.ceil(post.content.rendered.split(" ").length / 200);

  return (
    <Container className="flex flex-col md:flex-row gap-8">
      {/* Main Content */}
      <div className="flex-1">
        {featuredImage && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-md relative w-full h-96">
            <Image
              src={featuredImage}
              alt={post.title.rendered}
              className="object-cover"
              priority
              fill
            />
          </div>
        )}

        {/* Title & Meta */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title.rendered}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
            <span>{date}</span>
            <span>by {post.author.name || "enginesmarket"}</span>
            <span>in {categoryName}</span>
            <span>• {readingTime} min read</span>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </article>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-96">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky">
          {/* Quick Quote Form */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quick Engine Quote - No Obligation
            </h3>
            <p className="text-xs text-gray-600 mb-4">
              We compare prices from trusted UK engine suppliers
            </p>
            <form className="space-y-3">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-gray-700"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-xs font-medium text-gray-700"
                >
                  Mobile No. *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter Your Mobile Number"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="vehicle"
                  className="block text-xs font-medium text-gray-700"
                >
                  Your Vehicle Details (Optional)
                </label>
                <textarea
                  id="vehicle"
                  rows={3}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your Car Engine or Make/Model or Engine Info (Optional)"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition font-medium text-sm"
              >
                Request A Quote
              </button>
              <p className="text-xs text-gray-500 mt-2">
                100% free, no obligation - we&apos;ll get back to you within
                hours.
              </p>
            </form>
          </div>

          {/* Related Posts */}
          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Related Posts
            </h3>
            <ul className="space-y-4">
              {relatedPosts.map((related: any) => {
                const relatedFeaturedImage =
                  related._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                const relatedDate = new Date(related.date).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  },
                );

                return (
                  <li
                    key={related.id}
                    className="border-b border-gray-200 pb-4 last:border-0"
                  >
                    <div className="flex space-x-3">
                      {relatedFeaturedImage && (
                        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded">
                          <Image
                            src={relatedFeaturedImage}
                            alt={related.title.rendered}
                            width={50}
                            height={50}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-800 text-sm leading-tight">
                          <Link
                            href={`/blog/${related.id}`}
                            className="hover:text-blue-600"
                          >
                            {related.title.rendered}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-600">{relatedDate}</p>
                        <Link
                          href={`/blog/${related.id}`}
                          className="text-xs text-blue-600 hover:underline inline-block"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
    </Container>
  );
};
export default BlogDetailPage;
