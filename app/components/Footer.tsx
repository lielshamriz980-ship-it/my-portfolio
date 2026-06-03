
const COL2 = ["התחל בחינם", "פיצ'רים", "תבניות", "תמחור", "Lex AI"];
const COL3 = ["מרכז עזרה", "שאלות נפוצות", "בלוג", "אבטחה"];
const COL4 = ["אודות", "צרו קשר", "תנאי שימוש", "מדיניות פרטיות"];

export default function Footer() {
  return (
    <footer style={{ background: "#080510" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-black mb-4" style={{ color: "#4F46E5" }}>
              deal<span style={{ color: "#7C3AED" }}>|</span>awyer
            </div>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "#6B7280" }}>
              חוזה חכם. הגנה אמיתית. בדקות.
            </p>
            <p className="text-xs mb-1" style={{ color: "#374151" }}>נוצר בישראל</p>
            <p className="text-xs" style={{ color: "#374151" }}>DealLayer v2.0</p>
          </div>

          {/* מוצר */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">מוצר</h4>
            <ul className="flex flex-col gap-3">
              {COL2.map(l => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: "#6B7280" }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* משאבים */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">משאבים</h4>
            <ul className="flex flex-col gap-3">
              {COL3.map(l => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: "#6B7280" }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* חברה */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5">חברה</h4>
            <ul className="flex flex-col gap-3">
              {COL4.map(l => (
                <li key={l}>
                  <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: "#6B7280" }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "#374151" }}>
            © 2026 DealLayer. כל הזכויות שמורות.
          </p>
          <div className="flex items-center gap-5">
            {["X", "LinkedIn", "Instagram"].map(s => (
              <a key={s} href="#" className="text-xs font-medium transition-colors hover:text-white" style={{ color: "#4B5563" }}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
