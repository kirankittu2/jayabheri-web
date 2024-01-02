import Image from "next/image";
import banner from "@/public/banner/banner.png";

export default function Video() {
  return (
    <section className=" h-[90vh]">
      <Image className="w-full h-full object-cover" src={banner} alt="banner" />
    </section>
  );
}
