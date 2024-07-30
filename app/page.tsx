import Image from "next/image";

{/* imports */}
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between
        x:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center md:text-left ">
          <span className="text-xl">Junior Software Engineer</span>
          <h2>Hey its</h2>
          <h1 className="cus_h1">
            <span>Callmekay</span>
          </h1>
          <p className="md:w-[450px]">
            iam an animator, good with graphics and animation content, i also program and create wonderful and practical software.
          </p>

          {/* cv and socials */}
          <div className="flex flex-row justify-center mt-3 mb-3 md:justify-start">
            <Button
              variant="outline"
              size="lg" 
              className="uppercase flex items-center gap-2"
              >
              <span className="text-slate-900">Download CV</span>
              <span className="text-slate-900 text-xl">
                <FiDownload />
              </span>
            </Button>
          </div>
        </div>
        <div>photo</div>
        </div>
      </div>
    </main>
  );
}
