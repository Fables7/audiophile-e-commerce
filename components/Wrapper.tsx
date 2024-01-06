import React, { PropsWithChildren } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex  justify-center">
      <div className="w-[1110px] flex flex-col gap-32 py-40">{children}</div>
    </div>
  );
};

export default Wrapper;
