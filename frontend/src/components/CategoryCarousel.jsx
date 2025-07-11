import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const categories = [
  { name: "Frontend Developer", color: "bg-blue-500 hover:bg-blue-600" },
  { name: "Backend Developer", color: "bg-green-500 hover:bg-green-600" },
  { name: "Data Science", color: "bg-purple-500 hover:bg-purple-600" },
  { name: "Graphic Designer", color: "bg-pink-500 hover:bg-pink-600" },
  { name: "FullStack Developer", color: "bg-yellow-500 hover:bg-yellow-600" },
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-20 text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-gray-800">
        Browse by <span className="text-white">Job Categories</span>
      </h2>
      <p className="text-gray-600 mt-2 text-white text-2xl">
        Select a category to find jobs that match your skills.
      </p>

      {/* Carousel Container */}
      <Carousel className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 mt-8 p-6 bg-gray-100 rounded-xl shadow-md">
        <CarouselContent>
          {categories.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
              <Button
                onClick={() => searchJobHandler(cat.name)}
                className={`text-white text-lg px-6 py-3 rounded-full shadow-lg transition-all duration-300 ${cat.color}`}
              >
                {cat.name}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
