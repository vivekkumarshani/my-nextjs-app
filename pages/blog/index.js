import Layout from "@/components/layout";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt:
      "Learn how React Hooks can simplify your state management and lifecycle methods.",
    category: "React",
    author: "Sudhir Kumar",
    publishAt: "2025-09-25",
  },
  {
    id: 2,
    title: "Next.js Static Generation",
    excerpt:
      "A guide on using Next.js getStaticProps and getStaticPaths for static pages.",
    category: "Next.js",
    author: "Nandani Kumari",
    publishAt: "2025-09-24",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    excerpt:
      "Understand the differences between CSS Grid and Flexbox with examples.",
    category: "CSS",
    author: "Vivek Sahani",
    publishAt: "2025-09-23",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <div className="p-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Blogs</h1>
          <nav>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              Back to home
            </Link>
          </nav>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 rounded-lg shadow-md hover:shadow-lg bg-white"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {post.author}
                  </span>
                  <span className="text-xs">|</span>
                  <span className="text-sm font-medium text-blue-600  px-2 py-1 rounded  ">
                    {post.publishAt}
                  </span>
                </div>
                <h2 className="text-xl font-medium text-gray-900 mb-3 mt-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex gap-1">
                  <Link
                    href={`/blog/${post.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
