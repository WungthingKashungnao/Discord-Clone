import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-red-500 h-full flex justify-center items-center">
      {children}
    </div>
  );
};

export default layout;
