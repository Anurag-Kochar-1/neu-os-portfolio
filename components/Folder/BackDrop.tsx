import React, { MouseEvent, useRef, useContext } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AppContext } from "@/context/AppContext";

const BackDrop = ({
  folderRef,
  children,
}: {
  folderRef: any;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { folderState, setFolderState } = useContext(AppContext);

  const handleOverlayClick = (
    e: MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    if (e.target === containerRef.current && e.target !== folderRef.current) {
      router.push("/");
    }
  };

  return (
    <motion.div
      onClick={(e) => setFolderState({
        isFolderOpen: false,
        folderName: null
      })}
      className="z-50 fixed inset-0 w-full h-screen bg-black/[.50] flex justify-center items-center"
      ref={containerRef}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {children}
    </motion.div>
  );
};

export default BackDrop;
