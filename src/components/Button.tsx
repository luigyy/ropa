import React from "react";

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({}) => {
  return (
    <div className="inline-block items-center justify-center ">
      <a
        href="#_"
        className="group relative inline-block px-6 py-2 font-medium"
      >
        <span className="bg-green absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform rounded transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="bg-creme group-hover:bg-green border-blue absolute inset-0 h-full w-full rounded border-2"></span>
        <span className="font-antonio group-hover:text-blue text-green relative text-xl tracking-wider">
          Button
        </span>
      </a>
    </div>
  );
};

export default Button;
