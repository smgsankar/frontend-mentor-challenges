import { useResizeEvent } from "../hooks/useResizeEvent";
import { DESKTOP_DIVIDER_SVG, MOBILE_DIVIDER_SVG } from "../svgPaths";

export function Divider() {
  const isMobile = useResizeEvent();
  const dividerSvg = isMobile ? MOBILE_DIVIDER_SVG : DESKTOP_DIVIDER_SVG;

  return (
    <img src={dividerSvg} className="p-6" alt="divider" />
  )
}