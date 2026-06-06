import { useLang } from "./LanguageContext";

export function useDirection() {
  const { t } = useLang();
  const isRtl = t.dir === "rtl";

  return {
    isRtl,
    isLtr: !isRtl,
    dir: t.dir,
    // For Tailwind classes
    flexReverse: isRtl ? "flex-row-reverse" : "flex-row",
    textAlign: isRtl ? "text-right" : "text-left",
    textEnd: isRtl ? "text-right" : "text-left",
    // For margin/padding direction (start = begin, end = finish)
    mlAuto: isRtl ? "mr-auto" : "ml-auto",
    mrAuto: isRtl ? "ml-auto" : "mr-auto",
    psBase: isRtl ? "pr" : "pl", // padding-start
    peBase: isRtl ? "pl" : "pr", // padding-end
    msBase: isRtl ? "mr" : "ml", // margin-start
    meBase: isRtl ? "ml" : "mr", // margin-end
  };
}
