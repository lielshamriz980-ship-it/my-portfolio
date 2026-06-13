"use client";
import { useRef, useEffect } from "react";

interface GooeyMorphTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
}

export function GooeyMorphText({
  texts,
  morphTime = 1.5,
  cooldownTime = 2.8,
  className = "",
}: GooeyMorphTextProps) {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let textIndex = texts.length - 1;
    let lastTime = Date.now();
    let morph = 0;
    let cooldown = cooldownTime;

    const setMorph = (fraction: number) => {
      const t1 = text1Ref.current;
      const t2 = text2Ref.current;
      if (!t1 || !t2) return;
      t2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      t2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      const f1 = 1 - fraction;
      t1.style.filter = `blur(${Math.min(8 / f1 - 8, 100)}px)`;
      t1.style.opacity = `${Math.pow(f1, 0.4) * 100}%`;
    };

    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current) {
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
      if (text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
      }
    };

    if (text1Ref.current) text1Ref.current.textContent = texts[texts.length - 1];
    if (text2Ref.current) text2Ref.current.textContent = texts[0];

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const now = Date.now();
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const wasInCooldown = cooldown > 0;
      cooldown -= dt;

      if (cooldown <= 0) {
        if (wasInCooldown) {
          textIndex = (textIndex + 1) % texts.length;
          if (text1Ref.current)
            text1Ref.current.textContent = texts[textIndex % texts.length];
          if (text2Ref.current)
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
        }
        morph -= cooldown;
        cooldown = 0;
        let fraction = morph / morphTime;
        if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 1;
        }
        setMorph(fraction);
      } else {
        doCooldown();
      }
    };

    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [texts, morphTime, cooldownTime]);

  const longest = texts.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    // inline-block so it flows naturally inside an h1 span.block, centered
    <span className={`relative inline-block mx-auto ${className}`} style={{ verticalAlign: "baseline", display: "inline-block" }}>
      {/* Invisible placeholder - determines width/height, inherits all parent styles */}
      <span className="invisible select-none pointer-events-none whitespace-nowrap" aria-hidden="true">
        {longest}
      </span>

      {/* Morphing overlay - absolutely covers the placeholder exactly */}
      <span
        className="absolute top-0 bottom-0 left-0 right-0"
        style={{ filter: "url(#gooey-threshold)" }}
      >
        <span
          ref={text1Ref}
          className={`absolute inset-0 flex items-center justify-center ${className}`}
          aria-hidden="true"
          style={{ opacity: "0%" }}
        />
        <span
          ref={text2Ref}
          className={`absolute inset-0 flex items-center justify-center ${className}`}
        />
      </span>
    </span>
  );
}
