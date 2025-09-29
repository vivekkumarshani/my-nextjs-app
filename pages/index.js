import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            Welcome to my portfolio
          </h1>
          <p className="text-sm text-gray-500 mb-2">
            I&apos;m a developer passionate about creating amazing web
            experiences.
          </p>
          <p className="text-sm text-gray-500">
            Explore the <strong>About</strong>, <strong>Contact</strong>, and{" "}
            <strong>Blog</strong> sections to learn more. With Tailwind CSS, the
            design is clean, responsive, and user-friendly.
          </p>
          <div className="flex items-center justify-center gap-6  mt-16">
            <Link
              href="https://github.com/vivekkumarshani/my-nextjs-app"
              target="_blank"
              className="px-8 py-4 bg-orange-500 text-white no-underline rounded-lg font-bold"
            >
              <button>GitHub Repo</button>
            </Link>

            <Link
              href="https://yourapp.vercel.app"
              target="_blank"
              className="px-8 py-4 bg-green-500 text-white no-underline rounded-lg font-bold"
            >
              <button>Live Demo</button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
