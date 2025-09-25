import Layout from "@/components/layout";
import Link from "next/link";
import { useRouter } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    excerpt:
      "Learn how React Hooks can simplify your state management and lifecycle methods.",
    content:
      "React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and include useState, useEffect, useContext, and more. Hooks allow you to organize logic inside a component, making your code cleaner and easier to maintain.",
    category: "React",
    author: "Sudhir Kumar",
    publishAt: "2025-09-25",
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Next.js Static Generation",
    excerpt:
      "A guide on using Next.js getStaticProps and getStaticPaths for static pages.",
    content:
      "Next.js allows you to pre-render pages at build time using getStaticProps and getStaticPaths. getStaticProps fetches data for a page, while getStaticPaths tells Next.js which dynamic routes to pre-render. This improves performance and SEO, especially for content-heavy sites.",
    category: "Next.js",
    author: "Nandani Kumari",
    publishAt: "2025-09-24",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    excerpt:
      "Understand the differences between CSS Grid and Flexbox with examples.",
    content:
      "CSS Grid and Flexbox are layout models in CSS. Flexbox is best for one-dimensional layouts (row or column), while Grid is perfect for two-dimensional layouts (rows and columns together). Understanding when to use each can simplify your web design workflow and create responsive designs effectively.",
    category: "CSS",
    author: "Vivek Sahani",
    publishAt: "2025-09-23",
    readTime: "4 min",
  },
];

export async function getStaticPaths() {
  const paths = blogPosts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  return {
    props: {
      post: post || null,
    },
  };
}

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.fallback) {
    return <div>Loading</div>;
  }

  const goback = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <div className="p-6">
          <button
            onClick={goback}
            className="text-blue-500 cursor-pointer text-md hover:text-blue-700"
          >
            Go back
          </button>
          <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-2 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-600">{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-hray-600">
              <span>By: {post.author}</span>
              <span>.</span>
              <span>By: {post.publishAt}</span>
            </div>
          </div>
          <article className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <div className="prose prose-lg max-w-none">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </Layout>
    </div>
  );
}
