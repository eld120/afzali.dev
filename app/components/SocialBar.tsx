import Link from "next/link";
import Image from "next/image";
import LinkedIn from "/public/static/LinkedIn_icon.svg";
import MailIcon from "/public/static/Antu_mail-folder-sent.png";
import Github from "/public/static/github-mark-white.png";

function SocialBar() {
  return (
    <div className="flex gap-6 justify-center">
      {/* email */}
      <Link href={"mailto:seyamack@origma.io"} className="hover:-translate-y-2">
        <Image src={MailIcon} width={36} height={36} alt="Email Me Logo" />
      </Link>
      {/* linkedin */}
      <Link href={"https://www.linkedin.com/in/seyamack-a-912009202/"} className="hover:-translate-y-2">
        <Image src={LinkedIn} alt="LinkedIn Logo" width={36} height={36} />
      </Link>
      {/* github */}
      <Link href={"https://github.com/eld120"} className="hover:-translate-y-2">
        <Image src={Github} alt="Github Logo" width={36} height={36} />
      </Link>
    </div>
  );
}

export default SocialBar;
