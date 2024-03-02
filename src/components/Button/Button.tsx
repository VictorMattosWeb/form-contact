import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: string;
  className?: string;
  type?: string;
}

export default function Button({ children, className, type }: ButtonProps) {
  return (
    <button
      className={twMerge(
        `bg-gray-700 p-3 w-full font-semibold rounded-md ${className} `
      )}
    >
      {children}
    </button>
  );
}
