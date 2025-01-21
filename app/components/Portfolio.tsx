import Image from "next/image";
import Link from "next/link";

import rezasrugthumbnail from "/public/static/rezasrugthumbnail.png";

export default function Portfolio() {
  return (
    <div className="text-center w-fit my-12">
      <Link href={"https://rezasruggallery.com/"} target="_blank">
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
