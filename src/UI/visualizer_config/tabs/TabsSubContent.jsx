import React from "react";

const TabsSubContent = ({ label, children }) => {
  return (
    <div className="w-full gap-y-4 flex flex-col">
      <span className="text-base font-normal">{label}</span>
      <div className="w-full flex justify-center items-center">
        <div className="w-10/12">{children}</div>
      </div>
      <div className="h-2"></div>
    </div>
  );
};

export default TabsSubContent;
