import Image from "next/image";

import serviceImage from "@/public/service-carousel.svg";

export default function CarouselItem() {
  return (
    <div className="mb-[10px]">
      <div className="flex h-[581px] w-full">
        <div className="w-1/2 flex items-end">
          <Image
            className="w-full"
            src={serviceImage}
            alt="Service Section Background"
          />
        </div>
        <div className="w-1/2 flex">
          <div className="flex flex-col h-full">
            <div className="mb-auto p-[46px]">
              <h1 className="text-[64px] mt-[-10px] mb-[10px] text-[#34623F] Clayo-medium max-[1590px]:leading-[70px]">
                structural works
              </h1>
              <p className="custom-text-20">
                We specialize in all types of structural works in construction
                projects. We ensure top-quality workmanship and timely delivery
                from commercial buildings to luxury villas.
              </p>
              <ol className="custom-text-20">
                <li>1. Commercial constructions </li>
                <li>2. Luxury villas</li>
                <li>3. Residential constructions</li>
              </ol>
            </div>
            <div className="h-[210px] w-full bg-[#B6A156] flex">
              <div className="flex-1 text-white flex flex-col items-center justify-center">
                <div className="text-[80px] text-center mt-[-20px] proxima-nova">
                  1.3K
                </div>
                <div className="text-[20px] text-center mt-[-20px] proxima-nova">
                  Commercials
                </div>
              </div>
              <div className="flex-1 text-white flex flex-col items-center justify-center">
                <div className="text-[80px] text-center mt-[-20px] proxima-nova">
                  4X
                </div>
                <div className="text-[20px] text-center mt-[-20px] proxima-nova">
                  Quality
                </div>
              </div>
              <div className="flex-1 text-white flex flex-col items-center justify-center">
                <div className="text-[80px] text-center mt-[-20px] proxima-nova">
                  30
                </div>
                <div className="text-[20px] text-center mt-[-20px] proxima-nova">
                  Retails
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
