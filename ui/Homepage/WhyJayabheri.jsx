"use client";

import WhyJayabheriCard from "@/components/WhyJayabheriCard";
import { useRef, useState } from "react";
import why1 from "@/public/why1.svg";
import why2 from "@/public/why2.svg";
import why3 from "@/public/why3.svg";
import why4 from "@/public/why4.svg";

export default function WhyJayabheri() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsScrolling(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
    scrollContainerRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    setIsScrolling(false);
    scrollContainerRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#F6F5EE] flex flex-col items-center pt-[85px] pb-[100px]">
      <h1 className="headings">WHY JAYABHERI?</h1>
      <div className="flex mb-[50px]">
        <div className="w-1/5"></div>
        <div>
          <h1 className="heading-54-dark-green">
            commitment towards quality and excellence.
          </h1>
          <p className="text-center custom-text-20-green">
            Our services redefine your space with a strong focus on innovation
            and durability.
          </p>
        </div>
        <div className="w-1/5"></div>
      </div>
      <div
        className="why-container w-full overflow-hidden"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}>
        <div className="flex w-[90vw] why-wrapper">
          <WhyJayabheriCard
            title="experience"
            content="Jayabheri Engineering Solutions has 10+ years of experience in the construction industry. We don’t just construct spaces; we redefine them with innovation and longevity at the core."
            margin="114"
            alt="1"
            image={why1}
          />
          <WhyJayabheriCard
            title="timely delivery"
            content="Jayabheri Engineering Solutions aims to deliver projects within the agreed-upon timelines. We commit to on-time project completion, with efficient planning and execution."
            alt="1"
            image={why2}
          />
          <WhyJayabheriCard
            title="budget control"
            content="At Jayabheri, we stick to your budget and control costs for commercial construction. We deliver within your budget, ensuring your investments are sound and fruitful."
            alt="1"
            image={why3}
          />
          <WhyJayabheriCard
            title="safety management"
            content="Your safety is our priority. Our strict safety measures create a secure environment for everyone involved in the project."
            alt="1"
            image={why4}
          />
          <WhyJayabheriCard
            title="experience"
            content="Jayabheri Engineering Solutions has 10+ years of experience in the construction industry. We don’t just construct spaces; we redefine them with innovation and longevity at the core."
            alt="1"
            image={why1}
          />
          <WhyJayabheriCard
            title="experience"
            content="Jayabheri Engineering Solutions has 10+ years of experience in the construction industry. We don’t just construct spaces; we redefine them with innovation and longevity at the core."
            alt="1"
            image={why2}
          />
          <WhyJayabheriCard
            title="experience"
            content="Jayabheri Engineering Solutions has 10+ years of experience in the construction industry. We don’t just construct spaces; we redefine them with innovation and longevity at the core."
            alt="1"
            image={why3}
          />
        </div>
      </div>
    </section>
  );
}
