"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BackNav = () => {
  const router = useRouter();
  return (
    <button className="mb-14 self-start" onClick={() => router.back()}>
      <p className="text-black/50">Go Back</p>
    </button>
  );
};

export default BackNav;
