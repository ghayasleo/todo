import React from "react";
import { cn } from "~/utils";

function Button({ children, className, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
