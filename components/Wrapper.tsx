import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex  justify-center">
      <div className={cn("w-[1110px] flex flex-col gap-32 py-40", className)}>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
