import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-black  via-purple-700 to-black text-white flex flex-col">
      {/* Navbar (Fixed at Top) */}
      <Navbar />

      {/* Content Wrapper */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6 py-10 space-y-16">
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

