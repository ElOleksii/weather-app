import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useScrollByArrows } from "./useScrollByArrows";
import "./Scrollbar.css";

const ScrollByArrows = ({ children }) => {
  const { scrollContainerRef, scrollByItems } = useScrollByArrows();

  const itemWidth = 50;
  return (
    <div className="flex items-center max-w-max">
      <div
        onClick={() => scrollByItems(itemWidth, -9)}
        className="cursor-pointer hidden lg:block"
      >
        <FaArrowLeft size={30} />
      </div>

      <div
        className="horizontal-scrollbar flex gap-3 py-8 px-5 box-border overflow-x-auto z-30"
        ref={scrollContainerRef}
      >
        {children}
      </div>
      <div
        onClick={() => scrollByItems(itemWidth, 9)}
        className="cursor-pointer hidden lg:block"
      >
        <FaArrowRight size={30} />
      </div>
    </div>
  );
};

export default ScrollByArrows;
