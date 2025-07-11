import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-6 rounded-xl shadow-lg bg-blue border border-gray-200 transition-transform transform hover:scale-105">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-3">
        <Avatar className="border border-gray-300 p-1 rounded-md">
          <AvatarImage src={job?.company?.logo} />
        </Avatar>
        <div>
          <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location || "India"}</p>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold text-indigo-700">{job?.title}</h1>
        <p className="text-sm text-gray-600 mt-2">{job?.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">
          {job?.position} Positions
        </Badge>
        <Badge className="bg-red-100 text-red-600 font-semibold px-3 py-1 rounded-full">
          {job?.jobType}
        </Badge>
        <Badge className="bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full">
          {job?.salary} LPA
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">
          Details
        </Button>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
