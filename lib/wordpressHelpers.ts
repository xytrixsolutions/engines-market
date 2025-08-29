const hostname = process.env.CMS_HOSTNAME || "https://cms.enginesmarket.co.uk";
async function getPost(id: number | string) {
  const res = await fetch(`${hostname}/wp-json/wp/v2/posts/${id}?_embed`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return null;
  return res.json();
}

async function getPosts() {
  const res = await fetch(`${hostname}/wp-json/wp/v2/posts?_embed`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}

const getFeaturedPosts = async () => {
  try {
    const res = await fetch(
      `${hostname}/wp-json/wp/v2/posts?_embed&per_page=3`,
      {
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
};
async function getRelatedPosts(categoryId: number) {
  const res = await fetch(
    `${hostname}/wp-json/wp/v2/posts?categories=${categoryId}&per_page=5&_embed`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) return [];
  return res.json();
}
export { getPost, getPosts, getFeaturedPosts, getRelatedPosts };

