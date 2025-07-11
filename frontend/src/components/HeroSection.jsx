import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center   text-white py-16 px-6">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        <span className="mx-auto px-5 py-2 rounded-full bg-white text-indigo-700 font-medium shadow-md">
          Your Next Career Move Starts Here 🚀
        </span>
        <h1 className="text-6xl font-extrabold leading-tight">
          Find Your <span className="text-yellow-300">Perfect Job</span> & Build <br />
          Your <span className="text-yellow-400">Dream Career</span>
        </h1>
        <p className="text-lg text-gray-200">
          Discover top companies, apply seamlessly, and take control of your career. Your future starts now!
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-xl mx-auto bg-white shadow-lg rounded-full items-center px-4 py-2 border border-gray-300 focus-within:ring-2 focus-within:ring-indigo-500">
  <input
    type="text"
    placeholder="Search for jobs, companies..."
    onChange={(e) => setQuery(e.target.value)}
    className="flex-1 outline-none border-none text-gray-800 text-lg px-4 py-2 bg-transparent placeholder-gray-500"
  />
  <Button
    onClick={searchJobHandler}
    className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all p-3"
  >
    <Search className="h-6 w-6 text-white" />
  </Button>
</div>


        <div className="flex justify-center gap-4 mt-6">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold px-6 py-3 rounded-full">
            Explore Jobs
          </Button>
          <Button className="bg-transparent border border-white hover:bg-white hover:text-indigo-700 text-white font-semibold px-6 py-3 rounded-full">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
