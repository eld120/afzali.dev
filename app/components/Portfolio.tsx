import Image from "next/image";
import Link from "next/link";

import rezasrugthumbnail from "/public/static/rezasrugthumbnail.png";

export default function Portfolio() {
  return (
    <div className="text-center w-fit">
      <Link href={"https://rezasruggallery.com/"} target="_blank">
        <h4 className="my-4 text-xl ">Reza&apos;s Rug Gallery</h4>
        <Image
          src={rezasrugthumbnail}
          width={300}
          height={200}
          alt="A thumbnail of rezasruggallery.com"
          className="object-cover "
        />
        <p className="opacity-80 my-4">Development and Automation</p>
      </Link>
    </div>
  );
}
