import AboutUsCard from "@/components/AboutUsCard";
import visibility from "@/public/visibility.svg";
import target from "@/public/Target.svg";
import jayabheri from "@/public/jayabheri.svg";

export default function AboutUs() {
  // return <h2>About Us</h2>;
  return (
    <section className="bg-[url('../public/dotted-bg.svg')] bg-contain bg-no-repeat bg-[#F6F5EE] flex flex-col items-center pb-[117px]">
      <div className="w-[78.7%] h-[575px] relative mb-[55px] bg-[url('../public/white-bg/white-bg.png')] flex justify-center items-center bg-no-repeat ">
        <div className="w-[78.7%] flex flex-col items-center">
          <h1 className="headings">ABOUT US</h1>
          <h1 className="text-center mb-[33px] text-[1.56vw] Clayo-medium text-[#34623F] max-text-size-30">
            a leading private construction company specializing in medium to
            large-scale commercial properties such as offices and retail space
            projects.
          </h1>
          <p className="mb-[17px] text-[1.041vw] text-[#535353] proxima-nova max-text-size-20">
            Our expertise extends to MEP (Mechanical, Electrical, and Plumbing)
            services, underpinned by our pioneering founder.
          </p>
          <p className="text-center mb-[17px] text-[1.041vw] text-[#535353] proxima-nova max-text-size-20">
            We handle diverse turnkey projects, from residential bungalows to
            industrial complexes, commercial buildings, and apartments. We offer
            various design options and expert suggestions for efficient space
            management, aligning with customers tastes and budgets. With over 15
            landmark projects, we are driven by a customer-centric approach and
            a dedication to top-notch quality. The company has emerged as an
            industry leader, dealing with projects across Telangana and other
            states.
          </p>
          <p className="text-[1.041vw] text-[#535353] proxima-nova max-text-size-20">
            Jayabheri Engineering Solutions, established in 2017 and
            headquartered in Hyderabad
          </p>
        </div>
      </div>
      <div className="flex justify-around flex-wrap  px-[114px] container-p-left-a-right">
        <AboutUsCard
          title="our vision"
          content="Growth-oriented, and forward-thinking construction company, setting benchmarks in eco-friendly, customer-satisfying, and internationally standard residential, commercial, and infrastructure solutions."
          image={visibility}
          alt="Visibility"
        />
        <AboutUsCard
          title="our mission"
          content="To redefine construction solutions, ensuring Jayabheri is synonymous with innovation, cost-efficiency, quality, timely delivery, safety, and environmental sustainability."
          image={target}
          alt="Target"
        />
        <AboutUsCard
          title="our values"
          content="Integrity, Trust and Quality – these are the pillars at Jayabheri. These core values shape our approach, ensuring we build trust-based relationships and consistently deliver high-quality results."
          image={jayabheri}
          alt="Jayabheri"
        />
      </div>
    </section>
  );
}
