"use client";

export function DigitalSignatureServicePageV2() {
  return (
    <div style={{ direction: "rtl", background: "#fcf8ff", color: "#181445", fontFamily: "Assistant, sans-serif", minHeight: "100vh" }}>
      <style>{`
        .ds-shimmer { position: relative; overflow: hidden; }
        .ds-shimmer::after {
          content: ""; position: absolute; top: 0; right: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: dsShimmer 3s linear infinite;
        }
        @keyframes dsShimmer { 0%{right:-100%} 100%{right:100%} }
        .ds-card { transition: transform 0.3s, box-shadow 0.3s; }
        .ds-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(79,70,229,0.1); }
      `}</style>

      <div style={{ background: "#f6f2ff", borderBottom: "1px solid #c3c6d7", padding: "12px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: 32, fontWeight: 700, color: "#181445", margin: 0 }}>חתימה דיגיטלית</h1>
      </div>

      <main>
        <section style={{ padding: "64px 24px 96px", textAlign: "center" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h2 style={{ fontSize: 48, fontWeight: 700, color: "#181445", marginBottom: 16 }}>
              חתימה דיגיטלית מאובטחת<br/><span style={{ color: "#004ac6" }}>בסטנדרט הגבוה ביותר</span>
            </h2>
            <p style={{ fontSize: 18, color: "#434655", marginBottom: 32 }}>מערכת חתימה משפטית המשלבת אבטחה ברמה בנקאית עם חוויית משתמש חלקה.</p>
            <button style={{ background: "#004ac6", color: "#fff", padding: "16px 40px", borderRadius: 12, fontSize: 20, fontWeight: 600, border: "none", cursor: "pointer" }}>התחל לחתום עכשיו</button>
          </div>
        </section>

        <section style={{ padding: "64px 24px", background: "#fcf8ff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 48 }}>איך זה עובד?</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {[
                { num: 1, title: "העלאת מסמך", desc: "העלה PDF או השתמש בתבניות מובנות." },
                { num: 2, title: "שליחה לחתימה", desc: "הפץ דרך WhatsApp, SMS או אימייל." },
                { num: 3, title: "אבטחה וארכיון", desc: "קבל עותק חתום עם Audit Log מלא." },
              ].map((step, i) => (
                <div key={i} style={{ padding: 32, borderRadius: 24, background: "#fff", border: "1px solid #c3c6d7" }}>
                  <div style={{ fontSize: 32, fontWeight: 700, color: "#004ac6", marginBottom: 16 }}>{step.num}</div>
                  <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 16, color: "#434655" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 24px", background: "#2d2a5b", color: "#fff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32 }}>תשתית אבטחה בדרגת Enterprise</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
              <div>
                <p>אנחנו מגנים על הנכסים היקרים ביותר שלך עם טכנולוגיית ההצפנה המתקדמת בעולם.</p>
                <ul style={{ fontSize: 16, color: "rgba(227,223,255,0.8)" }}>
                  <li>הצפנת AES-256</li>
                  <li>תאימות משפטית מלאה SOC2 ו-GDPR</li>
                  <li>אימות רב-שלבי (MFA)</li>
                </ul>
              </div>
              <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 24, padding: 24, fontSize: 11, fontFamily: "monospace", color: "#fff", opacity: 0.7 }}>
                <div>[09:42:12] :: Connection established</div>
                <div>[09:42:15] :: Audit event completed</div>
                <div>[09:42:20] :: Final PDF generated</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 24px", background: "#fff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 48 }}>חתימה מכל מקום, בכל ערוץ</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div style={{ padding: 40, borderRadius: 24, background: "#f0fdf4" }}>
                <h3 style={{ fontSize: 24, fontWeight: 600, color: "#166534", marginBottom: 12 }}>WhatsApp Signing</h3>
                <p style={{ fontSize: 16, color: "#166534cc" }}>קצב חתימה מהיר פי 3 לעומת אימייל.</p>
              </div>
              <div style={{ padding: 40, borderRadius: 24, background: "#eff6ff" }}>
                <h3 style={{ fontSize: 24, fontWeight: 600, color: "#1e40af", marginBottom: 12 }}>Email Distribution</h3>
                <p style={{ fontSize: 16, color: "#1e40afcc" }}>מערכת שליחה חכמה עם מעקב בזמן אמת.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 24px", background: "#fcf8ff" }}>
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, textAlign: "center", marginBottom: 48 }}>שאלות נפוצות</h2>
          </div>
        </section>

        <section style={{ padding: "64px 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ background: "#004ac6", borderRadius: 40, padding: 80, textAlign: "center", color: "#fff" }}>
              <h2 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>מוכנים לשדרג את תהליכי החתימה?</h2>
              <p style={{ fontSize: 18, marginBottom: 32 }}>הצטרפו למאות חברות שכבר עברו לחתימה דיגיטלית חכמה.</p>
              <button style={{ background: "#fff", color: "#004ac6", padding: "16px 48px", borderRadius: 24, fontSize: 20, fontWeight: 600, border: "none", cursor: "pointer" }}>התחל לחתום עכשיו</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
