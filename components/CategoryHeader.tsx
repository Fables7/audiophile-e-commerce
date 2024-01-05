import React from "react";

const CategoryHeader = ({ title }: { title: string }) => {
  return (
    <div className="bg-black h-[220px] flex items-center justify-center">
      <h2 className="text-white">{title}</h2>
    </div>
  );
};

export default CategoryHeader;
