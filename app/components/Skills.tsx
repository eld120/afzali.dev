import React from "react";
import PythonLogo from "@/public/static/logos/python-logo-only.svg";
import NextLogo from "@/public/static/logos/nextjs-logotype-dark-background.svg";
import DjangoLogoLight from "@/public/static/logos/django-logo-negative.svg";
import NuxtLogo from "@/public/static/logos/Nuxt-green.svg";
import ReactLogo from "@/public/static/logos/React-icon.svg";
import ShopifyLogoDark from "@/public/static/logos/shopify_logo_darkbg.svg";
import VueLogo from "@/public/static/logos/Vue.js_Logo_2.svg";
import DockerLogo from "@/public/static/logos/docker-logo-blue.svg";
import Image from "next/image";
function Skills() {
  return (
    <section>
      {/* skills */}
      <div>
        <h4>Skills</h4>
        <ul>
          <li>Django/Python</li>
          <Image width={100} height={100} src={PythonLogo} alt="Python Language Logo" />
          <Image width={100} height={100} src={DjangoLogoLight} alt="Django Web Framework Logo" />

          <li>React/Next</li>
          <Image width={100} height={100} src={ReactLogo} alt="ReactJS Logo" />
          <Image width={100} height={100} src={NextLogo} alt="NextJS Logo" />
          <li>Vue/Nuxt</li>
          <Image width={100} height={100} src={NuxtLogo} alt="NuxtJS Logo" />
          <Image width={100} height={100} src={VueLogo} alt="VueJS Logo" />
          <li>Shopify</li>
          <Image width={100} height={100} src={ShopifyLogoDark} alt="Shopify Logo" />
          <li>Docker/DevOps</li>
          <Image width={100} height={100} src={DockerLogo} alt="Docker Logo" />
        </ul>
      </div>
    </section>
  );
}

export default Skills;
