import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="max-w-7xl mx-auto my-20 px-6">
      {/* Heading Section */}
      <h1 className="text-5xl font-extrabold text-center text-gray-900">
        <span className="bg-gradient-to-r from-black to-pink-500 bg-clip-text text-transparent">
          Latest & Top
        </span>{" "}
        <span className="bg-gradient-to-r from-pink-500 to-black bg-clip-text text-transparent">
        Job Openings 🚀
        </span>
        
      </h1>
      <p className="text-gray-600 text-center text-2xl text-white mt-2">
        Explore the best opportunities tailored just for you!
      </p>

      {/* Jobs Grid */}
      {allJobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {allJobs.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-40 mt-10">
          <span className="text-white text-xl">🚨 No Job Openings Available!</span>
        </div>
      )}

      {/* Browse More Button */}
      <div className="text-center mt-6">
        <button className="px-6 py-3 text-lg font-semibold rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md">
          Browse More Jobs
        </button>
      </div>
    </div>
  );
};

export default LatestJobs;
