import { cn } from "@/lib/utils";
import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex  justify-center">
      <div
        className={cn(
          "lg:w-[1110px] md:w-[768px] flex flex-col gap-32 pt-28 pb-40 ",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
