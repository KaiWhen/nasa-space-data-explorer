import { Link } from "react-router-dom";
import { Footer } from "../../components/layout/Footer";

const NotFoundPage = () => {
  return (
    <div className="relative bg-black w-full min-h-screen flex flex-col justify-center items-center">
      <div className="text-center p-8">
        <h1 className="text-7xl text-secondary md:text-6xl mb-6">
          404 Page Not Found.
        </h1>
        <Link
          className="text-2xl text-zinc-300 hover:text-accent duration-500"
          to={"/"}
        >
          Go Home
        </Link>
      </div>
      <div className="absolute bottom-4 text-center text-[12px]">
        <Footer />
      </div>
    </div>
  );
};

export default NotFoundPage;
