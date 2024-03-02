"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface InpurProps {
  type: string;
  placeholder?: string;
  className?: string;
  hasIconButton?: boolean;
  name?: string;
  required?: boolean;
}

export default function InputBox({
  type,
  placeholder,
  className,
  hasIconButton,
  required,
  name,
}: InpurProps) {
  const [showing, setShowing] = useState(false);
  return (
    <div className="relative flex flex-col gap-3">
      <input
        type={showing ? "text" : type}
        placeholder={placeholder}
        required={true}
        name={name}
        className={twMerge(
          `bg-gray-300 p-2 text-black outline-none rounded-md w-full ${className}`
        )}
      />

      {/* Icon Password */}
      {hasIconButton && (
        <button
          type="button"
          className="px-3 absolute right-0 top-1/2 transform -translate-y-1/2"
          onClick={() => setShowing((prevState) => !prevState)}
        >
          {showing ? (
            <FaEye className="w-4 h-4" />
          ) : (
            <FaEyeSlash className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
}
