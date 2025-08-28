/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import "./style.css";

// app/blog/page.js
async function getPosts() {
  const res = await fetch("http://localhost/wp-json/wp/v2/posts?_embed", {
    next: { revalidate: 3600 },
  });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
        <div className="space-y-8">
          {posts.map((post: any) => {
            const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
            const date = new Date(post.date).toLocaleDateString();

            return (
              <Link key={post.id} href={`/blog/${post.id}`} className="block">
                <div className="flex gap-6 items-start">
                  {image && (
                    <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={post.title.rendered}
                        width={128}
                        height={128}
                        className="object-cover h-full w-full"
                        unoptimized
                      />
                    </div>
                  )}
                  <div>
                    <h2
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      className="text-xl font-semibold text-gray-900"
                    />
                    <p className="text-gray-600 mt-1">{date}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
