"use client";
import { motion } from "framer-motion";
import { Link as LinkIcon, Share2 } from "lucide-react";

const TEAM = [
  {
    name: "יוסי כהן",
    role: "מייסד ו-CEO",
    bio: "משפטן בהכשרה, יזם בקר. הפסיד כסף בחוזה גרוע, זה השנה שזה הזיע אותו.",
    social: { linkedin: "#", twitter: "#" },
    color: "#4F46E5",
  },
  {
    name: "אורן לוי",
    role: "מייסד ו-CTO",
    bio: "מהנדס תוכנה עם 10 שנות ניסיון. בנה 3 סטארטאפים. יודע זה קשה - אנחנו כאן לעשות קל.",
    social: { linkedin: "#", twitter: "#" },
    color: "#059669",
  },
  {
    name: "דרור ויינברג",
    role: "עורך דין בכיר",
    bio: "20 שנות ניסיון בחוק חוזים. אם אתה משפטן וישן בלילה, אנחנו כאן עבורך.",
    social: { linkedin: "#", twitter: "#" },
    color: "#7C3AED",
  },
  {
    name: "רות שיטן",
    role: "Head of Product",
    bio: "עבדה במשך שנים עם עורכי דין. מוצאת כל הבעיות שאנחנו יכולים לפתור.",
    social: { linkedin: "#", twitter: "#" },
    color: "#DC2626",
  },
];

export default function TeamGrid() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((member, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl p-8 bg-white transition-all"
              style={{ border: "1.5px solid #E5E7EB", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${member.color}15` }}>
                <span className="text-2xl font-black" style={{ color: member.color }}>
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-xl font-black mb-1" style={{ color: "#1E1B4B" }}>{member.name}</h3>
              <p className="text-sm font-bold mb-4" style={{ color: member.color }}>{member.role}</p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#6B7280" }}>{member.bio}</p>
              <div className="flex gap-3">
                <a href={member.social.linkedin} className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
                  style={{ background: "#E5E7EB", color: "#6B7280" }}>
                  <LinkIcon size={16} strokeWidth={2} />
                </a>
                <a href={member.social.twitter} className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
                  style={{ background: "#E5E7EB", color: "#6B7280" }}>
                  <Share2 size={16} strokeWidth={2} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
