import Button from "@/components/Button";
import Image from "next/image";
import image1 from "@/public/images/image-1.png";
import image2 from "@/public/images/image-2.png";
import image3 from "@/public/images/image-3.png";
import workerBG from "@/public/worker-image-bg/worker-image.svg";
import jayabheriWhite from "@/public/jayabheri-white.svg";

export default function Main() {
  return (
    <section className="bg-[#F6F5EE] flex pl-[114px] py-[130px] container-p-left">
      <div className="w-2/4 mr-[40px]">
        <h1 className="headings">WELCOME TO JAYABHERI</h1>
        <h1 className="heading-84 mb-[10px]">Blueprinting Future Landmarks</h1>
        <p className="custom-text-28 mb-[20px]">
          Your one-stop solution — building structures to move-in ready spaces.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="w-2/4 ml-[40px]">
        <Image
          className="w-full mb-[35px]"
          src={workerBG}
          alt="Worker Background"
        />
        <div className="flex pr-[80px] max-[1850px]:pr-[30px] max-[1525px]:flex-col">
          <div className="flex mr-auto  max-[1525px]:mb-[20px]">
            <div className="flex">
              <div className="w-[79px] h-[79px] z-20">
                <Image className="w-full" src={image1} alt="Person 1" />
              </div>
              <div className="w-[79px] h-[79px] ml-[-30px] z-10">
                <Image className="w-full" src={image2} alt="Person 2" />
              </div>
              <div className="w-[79px] h-[79px] ml-[-30px] z-0">
                <Image className="w-full " src={image3} alt="Person 3" />
              </div>
            </div>
            <div className="flex items-center mx-[20px]">
              <div className="rounded-full bg-[#C0AE6F] w-[11px] h-[11px]"></div>
              <div className="border-t-2 border-dotted border-t-[#C0AE6F] w-[100px]"></div>
              <div className="rounded-full bg-[#C0AE6F] w-[16px] h-[16px]"></div>
            </div>
            <div>
              <div className="rounded-full w-[79px] h-[79px] bg-[#34623F] flex justify-center items-center mr-[20px]">
                <Image src={jayabheriWhite} alt="Jayabheri White" />
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <h3 className="font-size-20 proxima-nova-bold text-[#535353]">
              <span className="text-[#B39C4D]">75+ Active Consumer</span> In The
              World
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
