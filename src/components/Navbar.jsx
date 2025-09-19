import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-400 text-white p-6 flex justify-between shadow-md">
      <div className="text-2xl font-bold">My Portfolio</div>
      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:underline font-bold">Home</Link>
        <Link to="/about" className="hover:underline font-bold">About</Link>
        <Link to="/projects" className="hover:underline font-bold">Projects</Link>
        <Link to="/contact" className="hover:underline font-bold">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
