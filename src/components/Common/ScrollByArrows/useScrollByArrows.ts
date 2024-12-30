import { useRef } from "react";

export const useScrollByArrows = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Прокрутка на певну кількість пікселів
  const scrollByPixels = (pixels: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: pixels,
        behavior: "smooth",
      });
    }
  };

  // Прокрутка на кількість айтемів
  const scrollByItems = (itemWidth: number, itemCount: number) => {
    if (scrollContainerRef.current) {
      const distance = itemWidth * itemCount;
      scrollContainerRef.current.scrollBy({
        left: distance,
        behavior: "smooth",
      });
    }
  };

  return { scrollContainerRef, scrollByPixels, scrollByItems };
};
