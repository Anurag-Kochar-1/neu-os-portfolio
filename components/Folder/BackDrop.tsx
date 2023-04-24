import React, { MouseEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const BackDrop = ({
  folderRef,
  children,
}: {
  folderRef: any;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (
    e: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    if (e.target === containerRef.current && e.target !== folderRef.current) {
      router.push("/");
    }
  };

  return (
    <div
      onClick={(e) => handleOverlayClick(e)}
      className="z-50 fixed inset-0 w-full h-screen bg-black/[.50] flex justify-center items-center"
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default BackDrop;
