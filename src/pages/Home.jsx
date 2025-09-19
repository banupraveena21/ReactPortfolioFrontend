import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-purple-800 mb-4">
          Hi, I'm Banu Praveena 👋
        </h1>
        <p className="text-lg text-gray-800 mb-6 max-w-2xl mx-auto">
          A passionate <span className="font-semibold">Frontend Developer</span> crafting
          clean, modern, and responsive web applications using{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>, and{" "}
          <span className="font-semibold">JavaScript</span>.
        </p>

        <Link
          to="/projects"
          className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          View My Projects 🚀
        </Link>
      </section>

      {/* About Preview */}
      <section className="max-w-4xl mx-auto my-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 mb-6">
          I specialize in building user-friendly, interactive, and accessible
          web apps. My focus is on clean code, performance, and a mobile-first
          approach. I love solving problems and creating digital experiences
          that make an impact.
        </p>
        <Link
          to="/about"
          className="text-gray-600 font-semibold hover:underline"
        >
          Learn More →
        </Link>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition">
            ⚛️ <p className="mt-2 font-semibold">React.js</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition">
            🎨 <p className="mt-2 font-semibold">Tailwind CSS</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition">
            💻 <p className="mt-2 font-semibold">JavaScript</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition">
            🌐 <p className="mt-2 font-semibold">HTML & CSS</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto my-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-700 mb-4">
              A modern personal portfolio built with React and Tailwind CSS.
            </p>
            <a
              href="https://github.com/banupraveena21/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Project →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">E-commerce Store</h3>
            <p className="text-gray-700 mb-4">
              A full-stack online store with product catalog, cart, and checkout
              flow.
            </p>
            <a
              href="https://github.com/banupraveena21/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link
            to="/projects"
            className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            See All Projects
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-purple-400 text-white py-16 text-center rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together!</h2>
        <p className="max-w-2xl text-lg mx-auto mb-6">
          Have a project idea, collaboration, or freelance opportunity? I’d love
          to hear from you. Let’s build something amazing.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Me 📩
        </Link>
      </section>
    </div>
  );
};

export default Home;
