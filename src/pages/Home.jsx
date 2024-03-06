import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import TargetAudienceSection from "./TargetAudience";

export default function Home() {
  return (
    <div>
      <div className="bg-blue-500 text-white p-8 text-center h-[75vh] items-center flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Task Management Website
        </h1>
        <p className="text-lg mb-6">
          Streamline your tasks, collaborate efficiently, and boost
          productivity.
        </p>
        <Link
          to={"/dashboard"}
          className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold hover:bg-blue-700 hover:text-white transition duration-300"
        >
          Let's Explore
        </Link>
      </div>
      <TargetAudienceSection />
    </div>
  );
}
