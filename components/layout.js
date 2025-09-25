import NavigationPage from "./navigation";

export default function Layout({ children }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-4 mb-4">
      <NavigationPage />
      <main>{children}</main>
      <footer className="text-sm text-center mt-16 text-gray-600">
        <p>&copy; 2025 My fortfolio, Built with Next.js</p>
      </footer>
    </div>
  );
}
