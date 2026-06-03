"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "האם החוזים שנוצרים ב-DealLayer מחייבים משפטית?",
    a: "כן. החוזים שנוצרים ב-DealLayer עומדים בחוק החוזים הישראלי, והחתימות הדיגיטליות מחייבות על פי חוק החתימה האלקטרונית. כל חתימה מתועדת עם זמן, תאריך, ומספר טלפון.",
  },
  {
    q: "האם אני צריך ידע משפטי כדי להשתמש?",
    a: "ממש לא. Lex AI מנחה אותך בשיחה פשוטה ומכין את כל המסמך בשבילך. אין ז'רגון משפטי - רק שאלות פשוטות ותשובות ברורות.",
  },
  {
    q: "מה קורה אם הצד השני לא רוצה לחתום דיגיטלית?",
    a: "ניתן להוריד PDF ולחתום ידנית. בכל מקרה, תוכל לייבא מסמכים קיימים ולנהל אותם בתוך DealLayer.",
  },
  {
    q: "האם הנתונים שלי מאובטחים?",
    a: "בהחלט. אנחנו משתמשים בהצפנת SSL, אימות דו-שלבי ואחסון מאובטח. הנתונים שלך לא משותפים עם צד שלישי.",
  },
  {
    q: "כמה זמן לוקח ליצור חוזה?",
    a: "עם Lex AI - בין דקה לשלוש דקות. עם תבנית קיימת - פחות מדקה.",
  },
  {
    q: "האם אפשר לערוך חוזה לאחר יצירתו?",
    a: "כן, כל עוד הצד השני טרם חתם. לאחר חתימה, המסמך נעול כדי לשמור על תקינות ראייתית.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-24 bg-white" id="שאלות-נפוצות">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-black text-[#0F172A] leading-tight mb-5"
            style={{ fontSize: "clamp(30px, 5.5vw, 60px)" }}>
            שאלות נפוצות
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl font-light"
            style={{ color: "#6B7280" }}>
            כל מה שרצית לדעת לפני שמתחילים
          </motion.p>
        </div>

        <div>
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="border-b"
              style={{ borderColor: "#F1F5F9" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full py-6 text-right gap-4">
                <span className="text-lg font-bold text-[#0F172A] flex-1 text-right">{faq.q}</span>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ background: open === i ? "#4F46E5" : "#F1F5F9" }}>
                  {open === i
                    ? <Minus size={16} color="white" strokeWidth={2.5} />
                    : <Plus size={16} color="#6B7280" strokeWidth={2.5} />
                  }
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden">
                    <p className="pb-6 text-base leading-relaxed" style={{ color: "#6B7280" }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
