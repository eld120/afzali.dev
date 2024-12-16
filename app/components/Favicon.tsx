import Image from "next/image";
import TerminalIcon from "@/public/static/logos/terminal.svg";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";

export const contentType = "image/png";

export default async function Favicon() {
  return new ImageResponse(<Image width={32} height={32} alt="Icon/Logo of a computer terminal" src={TerminalIcon} />);
}
