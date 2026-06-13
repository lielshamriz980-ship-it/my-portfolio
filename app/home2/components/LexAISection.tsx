'use client';

export default function LexAISection() {
  return (
    <section className="py-xl bg-gradient-to-b from-on-background to-on-background/95" dir="rtl" lang="he">
      <div className="max-w-container-max mx-auto px-lg">
        {/* Badge */}
        <div className="flex justify-center mb-lg">
          <div className="bg-white/10 border border-white/20 px-md py-sm rounded-full text-label-md text-white flex items-center gap-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
            פושפוש על Lex AI
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          {/* Left: Text Content */}
          <div className="text-white">
            <h2 className="font-headline-xl text-headline-xl mb-lg">
              <span className="block">Lex AI -</span>
              <span className="block">עורך הדין הצמוד שלך</span>
            </h2>

            <p className="font-body-lg text-white/80 mb-lg">
              Lex ינתח את החוזה שלך, יעזור ליצור חוזים חדשים, ויוודא שהם תואמים לחוק ישראל. זמין לך תמיד, 24/7.
            </p>

            {/* Feature Checklist */}
            <ul className="space-y-sm mb-lg">
              <li className="flex items-center gap-sm text-white/90">
                <span className="text-secondary">✓</span>
                <span className="font-body-md">ניתוח חוזים ודוח בשניות</span>
              </li>
              <li className="flex items-center gap-sm text-white/90">
                <span className="text-secondary">✓</span>
                <span className="font-body-md">זיהוי סיכונים והצעות שיפור</span>
              </li>
              <li className="flex items-center gap-sm text-white/90">
                <span className="text-secondary">✓</span>
                <span className="font-body-md">הנחיות בעברית לחידוש חוזים</span>
              </li>
              <li className="flex items-center gap-sm text-white/90">
                <span className="text-secondary">✓</span>
                <span className="font-body-md">ציות מלא לחוק הישראלי</span>
              </li>
            </ul>

            <button className="bg-secondary text-on-secondary px-lg py-md rounded-lg font-label-md font-bold hover:bg-secondary/90 transition-colors inline-flex items-center gap-sm">
              <span>⚡</span>
              פגשו את Lex עכשיו
            </button>
          </div>

          {/* Right: AI Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-lg backdrop-blur-sm relative overflow-hidden">
            {/* AI Badge */}
            <div className="absolute top-lg right-lg bg-secondary/30 border border-secondary/50 px-md py-sm rounded-full text-label-md text-secondary flex items-center gap-xs">
              <span>⚡</span>
              LEX INTELLIGENCE
            </div>

            {/* Main Content */}
            <div className="pt-xl">
              {/* AI Avatar/Icon */}
              <div className="flex justify-center mb-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  L
                </div>
              </div>

              {/* Status Label */}
              <div className="text-center mb-lg">
                <div className="text-label-md text-white font-bold">Lex AI</div>
                <div className="text-caption text-white/60">פעיל עכשיו</div>
              </div>

              {/* Example Messages */}
              <div className="space-y-md">
                <div className="bg-white/5 border border-white/10 rounded-lg p-md">
                  <p className="text-body-md text-white/80">שלום, Lex. מה סוג המסמך הזה לדעתך?</p>
                </div>

                <div className="bg-secondary/20 border border-secondary/40 rounded-lg p-md">
                  <p className="text-body-md text-white">המסמך הוא הסכם שירותים משפטיים. יש 3 סעיפים שדורשים תשומת לב...</p>
                  <button className="mt-md text-secondary text-label-md hover:text-secondary/80 font-bold">
                    קרא את ההסבר המלא →
                  </button>
                </div>
              </div>

              {/* Input Simulation */}
              <div className="mt-lg pt-lg border-t border-white/10">
                <div className="bg-white/5 rounded-lg px-md py-sm text-white/60 text-caption flex items-center gap-sm">
                  <span>💬</span>
                  <span>שאל אותי כל שאלה לגבי החוזים שלך...</span>
                </div>
              </div>

              {/* Features Under Card */}
              <div className="mt-lg grid grid-cols-2 gap-sm">
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg py-sm text-label-md text-white transition-colors text-center">
                  ניתוח / סיכום
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg py-sm text-label-md text-white transition-colors text-center">
                  שאלות / עזרה
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
