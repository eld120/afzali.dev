import React from "react";

function Footer() {
  const thisYear = new Date().getFullYear().toString();
  return (
    <section className="flex justify-center py-4">
      <div className="font-thin text-sm"> © {thisYear} Hub Corporation. All Rights Reserved.</div>
    </section>
  );
}

export default Footer;
