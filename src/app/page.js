import ImageContainer from "@/components/ImageContainer";
import Image from "next/image";

export default function Home() {
  return (
     <div className="w-full h-screen overflow-hidden">
      <audio src='/new_Lady.mp3' autoPlay loop>

      </audio>
       
      <ImageContainer />
     </div>
  );
}
