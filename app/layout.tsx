import type { Metadata } from "next";
import { Assistant, Heebo } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-assistant",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DealLayer - חוזה חכם. הגנה אמיתית. בדקות.",
  description:
    "צור חוזה מקצועי, שלח לחתימה בוואטסאפ, ושמור על ההסכמות שלך - בלי עורך דין, בלי בירוקרטיה.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${assistant.variable} ${heebo.variable}`}
    >
      <body className="min-h-full antialiased">
        {/* Global SVG filter for GooeyMorphText - placed once, zero layout impact */}
        <svg
          aria-hidden="true"
          focusable="false"
          style={{ position: "fixed", top: 0, left: 0, width: 0, height: 0, overflow: "hidden", pointerEvents: "none" }}
        >
          <defs>
            <filter id="gooey-threshold">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 210 -100"
              />
            </filter>
          </defs>
        </svg>
        {children}
      </body>
    </html>
  );
}
