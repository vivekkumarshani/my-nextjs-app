import Layout from "@/components/layout";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            Welcome to my portfolio
          </h1>
          <p className="text-sm text-gray-500 mb-2">
            I&apos;m a developer passionate about creating amazing web experiences.
          </p>
          <p className="text-sm text-gray-500">
            Explore the <strong>About</strong>, <strong>Contact</strong>, and{" "}
            <strong>Blog</strong> sections to learn more. With Tailwind CSS, the
            design is clean, responsive, and user-friendly.
          </p>
        </div>
      </Layout>
    </div>
  );
}
