import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) =>
        job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchedQuery.toLowerCase())
      );
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Page Container */}
      <div className="max-w-7xl mx-auto mt-10 px-6">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">
          Find Your <span className="text-purple-600">Dream Job</span> Today 🚀
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Section */}
          <div className="md:w-1/4 w-full p-5 bg-white shadow-lg rounded-lg border">
            <FilterCard />
          </div>

          {/* Job Listings */}
          <div className="flex-1 bg-white p-6 shadow-lg rounded-lg border">
            {filterJobs.length <= 0 ? (
              <div className="text-center text-gray-500 text-xl font-medium py-10">
                🚨 No Jobs Found!
              </div>
            ) : (
              <div className="h-[75vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterJobs.map((job) => (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.3 }}
                      key={job?._id}
                    >
                      <Job job={job} />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
