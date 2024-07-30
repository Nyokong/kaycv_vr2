import Image from "next/image";

{/* imports */}
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

{/* components */}
import Socials from "@/components/Socials";
import Mainphoto from "@/components/Mainphoto";
import Stats from "@/components/Stats";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="md:mt-8 mt-4">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between
        x:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center md:text-left order-2 md:order-none">
          <span className="text-xl">Junior Software Engineer</span>
          <h2>Hey its</h2>
          <h1 className="cus_h1">
            <span>Callmekay</span>
          </h1>
          <p className="md:w-[450px]">
            iam an animator, good with graphics and animation content, i also program and create wonderful and practical software.
          </p>

          {/* cv and socials */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-3 mb-3 md:justify-start">
            <Button
              variant="outline"
              size="lg" 
              className="uppercase w-[200px] flex items-center gap-2 rounded-full
              bg-teal-300 hover:bg-teal-600 hover:text-white"
              >
              <a href="/assets/cv/cvofkhotsonyokong.pdf" 
                download="callmekay_CV.pdf"
                className="flex justify-center items-center"
              >
                <span className="text-slate-900 hover:text-white">Download CV</span>
                <span className="text-slate-900 text-xl hover:text-white">
                    <FiDownload />
                </span>
              </a>
            </Button>
            {/* socials */}
            <div className="mb-8 mt-6 md:mt-4 md:mb-3 md:ml-4 flex items-center"> 
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border 
              border-teal-300 rounded-full flex justify-center items-center
              text-slate-900 text-base hover:bg-teal-600 hover:text-primary 
              hover:transition-all duration-500 bg-teal-200"/>
            </div>
          </div> 
        </div>
        <div className="order-1 md:order-none mb-8 md:mb-3">
          <Mainphoto/>
        </div>
        </div>
      </div>
      {/* Stats */}
      <Stats />

      {/* Services */}
      <Services/>
    </main>
  );
}
