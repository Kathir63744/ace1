"use client";

import { GraduationCap, Clock, ExternalLink, Star } from 'lucide-react';

export default function CourseCard({ course, onViewProgram }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
          <img 
            src={course.logo} 
            alt={course.institute}
            className="h-8 object-contain"
          />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-semibold">{course.rating}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
            {course.level}
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {course.students} students
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">{course.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <GraduationCap className="w-4 h-4 mr-2" />
            <span className="text-sm">{course.institute}</span>
          </div>
        </div>

        <button
          onClick={() => onViewProgram(course.courseType)}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 font-medium"
        >
          View Program
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}