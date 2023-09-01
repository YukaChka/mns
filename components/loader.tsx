"use client";

import { useEffect, useState } from "react";

export function LoadingSkeleton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 10);
  }, []);

  return (
    <div>
      <div className="items-center  bg-white absolute w-[100%] h-[100%] top-0 left-0 --">
        <div className="flex justify-center my-[20%]">
          <div className="animate-ping absolute inline-flex h-5 w-5  rounded-full bg-sky-400 opacity-75">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
