"use client";

import { useWindowSize } from "@/hooks/useWindowSize";

export const FooterV2 = () => {
  const { width, height } = useWindowSize();
  return (
    <footer>
      <div>{width}</div>
      <div></div>
    </footer>
  );
};
