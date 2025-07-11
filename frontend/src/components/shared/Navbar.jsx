import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-black  via-purple-700 to-black shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 h-16">
        {/* Logo */}
        <Link to="/" className="text-white text-3xl font-bold tracking-wide">
          Job<span className="text-yellow-400">Quest</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-6 text-white text-lg">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies" className="hover:text-yellow-300 transition-all">
                    Companies
                  </Link>
                </li>
                <li>
                  <Link to="/admin/jobs" className="hover:text-yellow-300 transition-all">
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/" className="hover:text-yellow-300 transition-all">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="hover:text-yellow-300 transition-all">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/browse" className="hover:text-yellow-300 transition-all">
                    Browse
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Authentication / Profile Section */}
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-semibold">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer ring-2 ring-white hover:ring-yellow-300 transition-all">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@user" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white shadow-lg rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user?.profile?.profilePhoto} alt="@user" />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{user?.fullname}</h4>
                    <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {user.role === "student" && (
                    <div className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 cursor-pointer">
                      <User2 />
                      <Link to="/profile" className="text-base">
                        View Profile
                      </Link>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-700 hover:text-red-500 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link" className="text-base">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
