// src/components/DownloadCV.jsx
import React from 'react';
import { Download } from 'lucide-react'; // Import download icon

const DownloadCV = () => {
  return (
    <div className="flex justify-center mt-6 px-4">
      <a
        href="/my-cv.pdf"
        download
        className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base md:text-lg"
      >
        <Download className="w-5 h-5 sm:w-6 sm:h-6" />
        <span>Download My CV</span>
      </a>
    </div>
  );
};

export default DownloadCV;
