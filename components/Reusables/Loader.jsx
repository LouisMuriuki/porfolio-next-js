import React from "react";

const Loader = () => {
  return (
      <div class="flex space-x-2 animate-pulse">
        <div class="w-3 h-3 bg-teal-500 rounded-full"></div>
        <div class="w-3 h-3 bg-teal-500 rounded-full"></div>
        <div class="w-3 h-3 bg-teal-500 rounded-full"></div>
      </div>
  );
};

export default Loader;
