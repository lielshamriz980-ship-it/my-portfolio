// RTL/LTR utilities for seamless bidirectional support
import { useLang } from "./LanguageContext";

export function useRtlLtr() {
  const { t } = useLang();
  const isRtl = t.dir === "rtl";

  return {
    isRtl,
    isLtr: !isRtl,
    dir: t.dir,

    // Flexbox direction
    flexDir: (rtlClass: string, ltrClass: string) => isRtl ? rtlClass : ltrClass,
    flexReverse: isRtl ? "flex-row-reverse" : "flex-row",

    // Text alignment
    textAlign: isRtl ? "text-right" : "text-left",
    textEnd: isRtl ? "text-right" : "text-left",
    textStart: isRtl ? "text-left" : "text-right",

    // Margin/Padding (start = begin of direction, end = finish)
    // Use these for directional spacing
    ps: (size: string) => isRtl ? `pr-${size}` : `pl-${size}`, // padding-start
    pe: (size: string) => isRtl ? `pl-${size}` : `pr-${size}`, // padding-end
    ms: (size: string) => isRtl ? `mr-${size}` : `ml-${size}`, // margin-start
    me: (size: string) => isRtl ? `ml-${size}` : `mr-${size}`, // margin-end

    // Horizontal positioning
    left: (val: string) => isRtl ? `right-${val}` : `left-${val}`,
    right: (val: string) => isRtl ? `left-${val}` : `right-${val}`,

    // Transform origin for animations
    transformOrigin: isRtl ? "origin-right" : "origin-left",

    // Grid auto-flow
    gridAutoFlow: isRtl ? "grid-flow-col-dense" : "grid-flow-col",

    // CSS inline styles for complex transformations
    style: {
      direction: t.dir,
      textAlign: isRtl ? "right" : "left",
      marginInlineStart: 0, // Will be handled by dir attribute
      marginInlineEnd: 0,
    } as React.CSSProperties,
  };
}

// Animation utilities for RTL/LTR
export function useRtlAnimation() {
  const { isRtl } = useRtlLtr();

  return {
    // Slide animations
    slideInFromLeft: isRtl ? { x: 100 } : { x: -100 },
    slideInFromRight: isRtl ? { x: -100 } : { x: 100 },
    slideOutToLeft: isRtl ? { x: -100 } : { x: 100 },
    slideOutToRight: isRtl ? { x: 100 } : { x: -100 },

    // Bounce directions
    bounceLeft: isRtl ? { x: 20 } : { x: -20 },
    bounceRight: isRtl ? { x: -20 } : { x: 20 },
  };
}
