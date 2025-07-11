import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-6 rounded-xl shadow-lg bg-white border border-gray-200 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      {/* Company Info */}
      <div className="flex items-center gap-3">
        <div className="bg-gray-100 p-2 rounded-lg">
          <img
            src={job?.company?.logo || "https://via.placeholder.com/40"}
            alt="Company Logo"
            className="w-10 h-10 rounded-md"
          />
        </div>
        <div>
          <h1 className="font-semibold text-xl text-gray-800">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location || "India"}</p>
        </div>
      </div>

      {/* Job Title & Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-indigo-700">{job?.title}</h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{job?.description}</p>
      </div>

      {/* Job Details */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">{job?.position} Positions</Badge>
        <Badge className="bg-red-100 text-red-600 font-semibold px-3 py-1 rounded-full">{job?.jobType}</Badge>
        <Badge className="bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full">{job?.salary} LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
