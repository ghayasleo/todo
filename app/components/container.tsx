import React, { type HTMLAttributes } from "react";
import { cn } from "~/utils";

function Container({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("md:container mx-auto px-7", className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
