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
            Explore the{" "}
            <Link
              href="/about"
              className="text-orange-500 font-semibold hover:underline"
            >
              About
            </Link>
            ,{" "}
            <Link
              href="/contact"
              className="text-orange-500 font-semibold hover:underline"
            >
              Contact
            </Link>{" "}
            and{" "}
            <Link
              href="/blog"
              className="text-orange-500 font-semibold hover:underline"
            >
              Blog
            </Link>{" "}
            sections to learn more. With Tailwind CSS, the design is clean,
            responsive, and user-friendly.
          </p>
        </div>
      </Layout>
    </div>
  );
}
