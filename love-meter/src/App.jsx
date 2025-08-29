import { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [shown, setShown] = useState([]);
  
  const SIDEBAR_WIDTH = 420;

  const [wiggle, setWiggle] = useState(false);

  function sidebarColors(val) {
    // Map 1..100 to hue 210 (blue) -> 0 (red)
    const amt = Math.max(1, Math.min(100, val || 1));
    const hue = Math.round(210 - (amt / 100) * 210);
    const bg = `hsl(${hue} 60% 12%)`;
    const border = `hsl(${hue} 50% 25%)`;
    return { bg, border };
  }

  useEffect(() => {
    if (shown.length > 0) {
      setWiggle(true);
      const t = setTimeout(() => setWiggle(false), 220);
      return () => clearTimeout(t);
    }
  }, [amount, shown.length]);
  
  // Ordered so French, Spanish, English are always first
  const phrases = [
    { lang: "Français", text: "Je t'aime" },
    { lang: "Español", text: "Te quiero" },
    { lang: "English", text: "I love you" },
    { lang: "Italiano", text: "Ti amo" },
    { lang: "Português", text: "Eu te amo" },
    { lang: "Deutsch", text: "Ich liebe dich" },
    { lang: "Nederlands", text: "Ik hou van jou" },
    { lang: "Svenska", text: "Jag älskar dig" },
    { lang: "Norsk", text: "Jeg elsker deg" },
    { lang: "Dansk", text: "Jeg elsker dig" },
    { lang: "Suomi", text: "Rakastan sinua" },
    { lang: "Polski", text: "Kocham cię" },
    { lang: "Česky", text: "Miluji tě" },
    { lang: "Slovenčina", text: "Ľúbim ťa" },
    { lang: "Magyar", text: "Szeretlek" },
    { lang: "Română", text: "Te iubesc" },
    { lang: "Български", text: "Обичам те" },
    { lang: "Српски", text: "Волим те" },
    { lang: "Hrvatski", text: "Volim te" },
    { lang: "Русский", text: "Я тебя люблю" },
    { lang: "Українська", text: "Я тебе кохаю" },
    { lang: "Ελληνικά", text: "Σ' αγαπώ" },
    { lang: "Türkçe", text: "Seni seviyorum" },
    { lang: "العربية", text: "أحبك" },
    { lang: "עברית", text: "אני אוהב אותך" },
    { lang: "हिन्दी", text: "मैं तुमसे प्यार करता/करती हूँ" },
    { lang: "বাংলা", text: "আমি তোমাকে ভালোবাসি" },
    { lang: "فارسی", text: "دوستت دارم" },
    { lang: "اردو", text: "میں تم سے پیار کرتا/کرتی ہوں" },
    { lang: "中文 (简体)", text: "我爱你" },
    { lang: "中文 (繁體)", text: "我愛你" },
    { lang: "日本語", text: "愛してる" },
    { lang: "한국어", text: "사랑해" },
    { lang: "Tiếng Việt", text: "Anh/Em yêu em/anh" },
    { lang: "ภาษาไทย", text: "ฉันรักเธอ" },
    { lang: "Tagalog", text: "Mahal kita" },
    { lang: "Bahasa Indonesia", text: "Aku cinta kamu" },
    { lang: "Català", text: "T'estimo" },
    { lang: "Galego", text: "Quérote" },
    { lang: "Euskara", text: "Maite zaitut" },
    { lang: "Gaeilge", text: "Taim i ngrá leat" },
    { lang: "Cymraeg", text: "Rwy'n dy garu di" },
    { lang: "Scottish Gaelic", text: "Tha gaol agam ort" },
    { lang: "Esperanto", text: "Mi amas vin" },
    { lang: "Interlingua", text: "Io ama te" },
    { lang: "Toki Pona", text: "mi olin e sina" },
    { lang: "Morse", text: ".. / .-.. --- ...- . / -.-- --- ..-" },
    { lang: "Binary (fun)", text: "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01111001 01101111 01110101" },
    { lang: "Emoji", text: "❤️➡️🫵" },
    { lang: "Sindarin (Elvish)", text: "Gi melin" },
    { lang: "Quenya (Elvish)", text: "Melinyel" },
    { lang: "Klingon", text: "qamuSHa'" },
    { lang: "High Valyrian", text: "Avy jorrāelan" },
    { lang: "Dothraki", text: "Anha zhilak yera" },
    { lang: "Na'vi", text: "Nga yawne lu oer" },
    { lang: "Pirate", text: "I be lovin' ye" },
    { lang: "Pig Latin", text: "Iway ovelay ouyay" },
    { lang: "Leet", text: "1 <3 j00" },
  ];

  function buildList(n) {
    const out = [];
    for (let i = 0; i < n; i++) {
      const pick = phrases[i % phrases.length];
      out.push({ index: i + 1, ...pick });
    }
    return out;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
        color: "#e2e8f0",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        paddingRight: shown.length > 0 ? SIDEBAR_WIDTH : 0,
        transition: "padding-right 180ms ease",
      }}
    >
      <style>{`
        @keyframes wiggle { 0%,100%{ transform: translateX(0)} 15%{ transform: translateX(-2px)} 30%{ transform: translateX(2px)} 45%{ transform: translateX(-2px)} 60%{ transform: translateX(2px)} 75%{ transform: translateX(-1px)} 90%{ transform: translateX(1px)} }
      `}</style>
      {/* Main content (left) */}
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          pointerEvents: "auto",
        }}
      >
        <div style={{ width: "min(900px, 92vw)" }}>
          <div
            style={{
              background: "#0b1220",
              border: "1px solid #24324a",
              borderRadius: 16,
              padding: 24,
              boxShadow: "0 10px 30px rgba(0,0,0,.35)",
            }}
          >
            <h1 style={{ fontSize: 28, margin: 0, marginBottom: 12 }}>💘 Dans combien de langues m'aimes-tu ?</h1>
            <p style={{ opacity: 0.85, marginTop: 0 }}>
              Choisis un nombre de <strong>1</strong> à <strong>100</strong>, puis appuie
              sur le bouton.
            </p>
            

            <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 12 }}>
              <input
                type="range"
                min={1}
                max={100}
                value={amount}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setAmount(val);
                  setShown(buildList(val));
                }}
                style={{ flex: 1 }}
              />
              <div style={{ width: 56, textAlign: "center", fontVariantNumeric: "tabular-nums" }}>{amount}</div>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: 18, opacity: 0.6, fontSize: 12 }}>
            Astuce : déplace le curseur puis clique à nouveau pour changer le nombre de
            langues affichées. Si tu dépasses la liste, elle se répète.
          </p>
        </div>
      </div>

      {/* Right sidebar for results */}
      {shown.length > 0 && (
        <aside
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            width: 420,
            width: SIDEBAR_WIDTH,
            maxWidth: "92vw",
            background: "#0f172a",
            borderLeft: "1px solid #1f2a44",
            background: sidebarColors(amount).bg,
            borderLeft: `1px solid ${sidebarColors(amount).border}`,
            boxShadow: "-12px 0 30px rgba(0,0,0,.35)",
            display: "flex",
            flexDirection: "column",
            animation: wiggle ? "wiggle 220ms ease" : undefined,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
              borderBottom: "1px solid #1f2a44",
              background: "#0b1220",
            }}
          >
            <strong style={{ fontSize: 16 }}>Résultats ({shown.length})</strong>
            <button
              onClick={() => setShown([])}
              style={{
                background: "transparent",
                color: "#94a3b8",
                border: "1px solid #1f2a44",
                padding: "6px 10px",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Fermer
            </button>
          </div>

          <div style={{ overflow: "auto", padding: "6px 0" }}>
            {shown.map((item) => (
              <div
                key={item.index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr 1fr",
                  gap: 12,
                  padding: "10px 14px",
                  borderBottom: "1px solid #152036",
                }}
              >
                <span style={{ opacity: 0.6, textAlign: "right" }}># {item.index}</span>
                <strong>{item.lang}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </aside>
      )}
    </div>
  );
}
