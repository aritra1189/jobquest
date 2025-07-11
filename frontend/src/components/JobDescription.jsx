import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isInitiallyApplied =
    singleJob?.applications?.some((application) => application.applicant === user?._id) || false;
  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {
        withCredentials: true,
      });

      if (res.data.success) {
        setIsApplied(true);
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(res.data.job.applications.some((application) => application.applicant === user?._id));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-6xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      {/* Job Title & Apply Button */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-indigo-700">{singleJob?.title}</h1>
          <p className="text-gray-500 mt-1">{singleJob?.company?.name} - {singleJob?.location}</p>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`mt-4 md:mt-0 px-6 py-3 text-lg font-semibold transition-all rounded-lg ${
            isApplied ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 text-white"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      {/* Job Details */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Job Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-gray-700">
          <p><span className="font-semibold">Role:</span> {singleJob?.title}</p>
          <p><span className="font-semibold">Location:</span> {singleJob?.location}</p>
          <p><span className="font-semibold">Experience Required:</span> {singleJob?.experience} yrs</p>
          <p><span className="font-semibold">Salary:</span> {singleJob?.salary} LPA</p>
          <p><span className="font-semibold">Total Applicants:</span> {singleJob?.applications?.length}</p>
          <p><span className="font-semibold">Posted Date:</span> {singleJob?.createdAt?.split("T")[0]}</p>
        </div>
      </div>

      {/* Badges Section */}
      <div className="flex flex-wrap gap-2 mt-6">
        <Badge className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full">{singleJob?.position} Positions</Badge>
        <Badge className="bg-red-100 text-red-600 font-semibold px-3 py-1 rounded-full">{singleJob?.jobType}</Badge>
        <Badge className="bg-purple-100 text-purple-700 font-semibold px-3 py-1 rounded-full">{singleJob?.salary} LPA</Badge>
      </div>

      {/* Description Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Job Description</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">{singleJob?.description}</p>
      </div>
    </div>
  );
};

export default JobDescription;
