import Image from "next/image";

// assets
import PythonLogo from "@/public/static/logos/python-logo-only.svg";
import NextLogo from "@/public/static/logos/nextjs-logotype-dark-background.svg";
import DjangoLogoLight from "@/public/static/logos/django-logo-negative.svg";
import NuxtLogo from "@/public/static/logos/Nuxt-green.svg";
import ReactLogo from "@/public/static/logos/React-icon.svg";
import ShopifyLogoDark from "@/public/static/logos/shopify_logo_darkbg.svg";
import VueLogo from "@/public/static/logos/Vue.js_Logo_2.svg";
import DockerLogo from "@/public/static/logos/docker-logo-blue.svg";

function Skills() {
  return (
    <section>
      {/* skills */}
      <div>
        {/* <h4 className="text-2xl font-bold  mb-6">Skills</h4> */}
        <ul className="flex flex-wrap justify-between gap-12 px-6 md:p-0">
          <Image width={100} height={100} src={PythonLogo} alt="Python Language Logo" />
          <Image width={100} height={100} src={DjangoLogoLight} alt="Django Web Framework Logo" />

          <Image width={100} height={100} src={ReactLogo} alt="ReactJS Logo" />
          <Image width={100} height={100} src={NextLogo} alt="NextJS Logo" />

          <Image width={100} height={100} src={NuxtLogo} alt="NuxtJS Logo" />
          <Image width={100} height={100} src={VueLogo} alt="VueJS Logo" />

          <Image width={100} height={100} src={ShopifyLogoDark} alt="Shopify Logo" />

          <Image width={100} height={100} src={DockerLogo} alt="Docker Logo" />
        </ul>
      </div>
    </section>
  );
}

export default Skills;
