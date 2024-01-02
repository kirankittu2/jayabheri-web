import Button from "@/components/Button";

export default function Form() {
  return (
    <section className="py-[64px]  px-[114px] bg-[#F6F5EE] border-t-[1px] border-[#414141] border-opacity-[0.2] flex flex-col items-center">
      <div className="flex">
        <div className="w-1/5"></div>
        <div>
          <h1 className="heading-54-dark-green">
            get a free quotation for your project
          </h1>
        </div>
        <div className="w-1/5"></div>
      </div>
      <div className="flex justify-center">
        <form className="w-[825px]">
          <div className="flex justify-center gap-10 ">
            <input
              className="w-[393px] h-[74px] pl-[20px] proxima-nova focus:outline-none custom-text-20-green"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="w-[393px] h-[74px] pl-[20px] proxima-nova focus:outline-none custom-text-20-green"
              type="text"
              placeholder="Contact Number"
            />
          </div>
          <div className="flex justify-center mt-[40px]">
            <textarea
              className="w-full pl-[20px] pt-[20px] proxima-nova focus:outline-none custom-text-20-green"
              rows="5"
              placeholder="Your Message"
            />
          </div>
          <div className="mt-[40px] flex justify-center">
            <Button>Get Started</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
