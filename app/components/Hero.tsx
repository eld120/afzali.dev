import Image from "next/image";
import SocialBar from "./SocialBar";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

function Hero() {
  return (
    <div className="m-3 flex justify-between px-6 md:p-0">
      <div className="max-w-96 w-1/2">
        <h1 className="text-2xl md:text-4xl font-bold mb-6">Hi I&apos;m Seyamack</h1>
        <div className="dark:text-gray-300  mb-4 font-light">
          <p className="mb-2">I&apos;m a software engineer based in the Minneapolis-St Paul metro</p>
        </div>
        {/* <p className='text-lg mb-4'>I have over a decade of experience working with specialty retailers and manufacturers with a focus on the outdoor industry</p> */}
        <a href={"mailto:seyamack@origma.io"}>
          <Button colorScheme="yellow" className="my-4">
            <span className="font-light">Let&apos;s&nbsp;</span> Work Together
          </Button>
        </a>
      </div>
      <div className="flex gap-5">
        <div className="m-4">
          {/* portfolio image */}
          <Image
            src={"/static/IMG_1465437914340.jpg"}
            alt="Seyamack's headshot/avatar"
            width={204}
            height={225}
            className="mb-4 rounded-md"
          />
          <SocialBar />
        </div>
      </div>
    </div>
  );
}

export default Hero;
