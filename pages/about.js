import Layout from "@/components/layout";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <div className="p-6">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
          <p className="text-sm text-gray-700 ">
            We are passionate about building modern web applications that are
            fast, scalable, and easy to use. This project is created with
            Next.js and styled using Tailwind CSS, bringing together performance
            and design. Our goal is to make learning and development simple,
            effective, and enjoyable for everyone.
          </p>
        </div>
      </Layout>
    </div>
  );
}
