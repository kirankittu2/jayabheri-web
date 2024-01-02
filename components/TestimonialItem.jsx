import Image from "next/image";
import image1 from "@/public/images/image-1.png";

export default function TestimonialItem({ width }) {
  return (
    <div>
      <div
        style={{ width: `${width == 0 ? "100%" : width + "px"}` }}
        className="flex flex-col justify-center items-center px-[250px] max-[1450px]:px-[50px]">
        <h2 className="text-[30px] Clayo-medium text-[#B6A156] mb-[20px]">
          standard dummy text ever
        </h2>
        <p className="text-center mb-[20px] custom-text-20-green">
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <p className="text-center mb-[60px] custom-text-20-green ">
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="w-[107px] h-[107px]">
          <Image className="w-full" src={image1} alt="Person 1" />
        </div>
        <div className="text-[24px] text-[#535353] proxima-nova-bold">
          John Doe
        </div>
        <p className="font-size-20 text-[#535353] proxima-nova">
          Co-Founder, DailyFresh
        </p>
      </div>
    </div>
  );
}
