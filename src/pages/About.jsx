const About = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">About Me</h1>

      {/* Intro Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <p className="text-lg text-gray-800 mb-4">
          Hello! I'm <span className="font-semibold">Banu Praveena</span>, a{" "}
          <span className="font-semibold">Frontend Web Developer</span> who
          loves crafting interactive, responsive, and user-friendly web
          applications.
        </p>
        <p className="text-gray-700 mb-4">
          I specialize in{" "}
          <span className="font-semibold">React.js</span>,{" "}
          <span className="font-semibold">JavaScript</span>, and{" "}
          <span className="font-semibold">Tailwind CSS</span>. My main focus is
          building clean, scalable, and high-performing web apps with a{" "}
          <span className="font-semibold">mobile-first design approach</span>.
        </p>
        <p className="text-gray-700">
          Beyond coding, I love reading tech blogs, exploring open-source
          projects, and constantly learning new technologies. You can always
          reach me through the{" "}
          <a href="/contact" className="text-blue-500 underline">
            Contact
          </a>{" "}
          page.
        </p>
      </div>

      {/* Skills Section */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Frontend */}
        <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
          ⚛️ React.js
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
          🎨 Tailwind CSS
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
          💻 JavaScript (ES6+)
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
          🌐 HTML5 & CSS3
        </div>
        {/* Tools */}
        <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
          🔧 Git & GitHub
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
          📦 npm / Yarn
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
          ⚡ VS Code
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center shadow">
          📱 Responsive Design
        </div>
      </div>

      {/* Experience Section */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
        Experience & Education
      </h2>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-600">
            Frontend Developer (Freelance)
          </h3>
          <p className="text-gray-600">2025 – Present</p>
          <p className="text-gray-700 mt-2">
            Worked on multiple freelance projects building responsive landing
            pages, personal portfolios, and e-commerce applications.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-blue-600">
            B.Sc. Computer Science
          </h3>
          <p className="text-gray-600">AJ College, 2008 – 2011</p>
          <p className="text-gray-700 mt-2">
            Gained strong fundamentals in programming, data structures, and web
            development. Built several academic projects using React and
            JavaScript.
          </p>
        </div>
      </div>

      {/* Interests Section */}
      <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
        Beyond Coding
      </h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700 mb-2">
          When I’m not coding, I enjoy:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Exploring new technologies & frameworks</li>
          <li>Designing simple UI mockups</li>
          <li>Reading tech blogs & articles</li>
          <li>Listening to music and sketching ✏️</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="/projects"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Explore My Projects 🚀
        </a>
      </div>
    </div>
  );
};

export default About;
