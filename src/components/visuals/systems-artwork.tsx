type SystemsArtworkProps = {
  compact?: boolean;
  variant?: "company" | "pos" | "warehouse";
};

const palettes = {
  company: { accent: "#91a9ff", soft: "#91a9ff", label: "CONNECTED OPERATIONS" },
  pos: { accent: "#63c9b8", soft: "#167c78", label: "TRANSACTION FLOW" },
  warehouse: { accent: "#e2a05c", soft: "#b36b2d", label: "WAREHOUSE FLOW" },
} as const;

export default function SystemsArtwork({ compact = false, variant = "company" }: SystemsArtworkProps) {
  const palette = palettes[variant];
  const systemId = variant === "company" ? "SYSTEM 01" : variant === "pos" ? "POS 01" : "WMS 01";

  return (
    <div className={`system-panel relative w-full ${compact ? "min-h-[260px]" : "min-h-[390px]"}`} aria-label={palette.label}>
      <div className="absolute left-6 top-6 z-10 flex items-center gap-3 font-mono text-[10px] tracking-[.16em] text-white/55 sm:left-8 sm:top-8">
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: palette.accent }} />
        <span>ZIROCRAFT / {systemId}</span>
      </div>

      <svg viewBox="0 0 720 560" role="img" aria-label={palette.label} className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity=".22" stroke="white" strokeWidth="1">
          {Array.from({ length: 9 }, (_, i) => <path key={"v" + i} d={`M${80 + i * 70} 0V560`} />)}
          {Array.from({ length: 7 }, (_, i) => <path key={"h" + i} d={`M0 ${70 + i * 70}H720`} />)}
        </g>

        {variant === "company" && (
          <>
            <g stroke={palette.accent} strokeOpacity=".7" strokeWidth="1.5">
              <path d="M105 340L235 250L360 315L500 175L625 245" />
              <path d="M105 340L105 410L235 320L360 385L500 245L625 315" strokeDasharray="5 8" />
              <path d="M235 250L235 320M360 315V385M500 175V245" strokeDasharray="3 7" />
            </g>
            <g stroke="white" strokeOpacity=".3">
              <ellipse cx="360" cy="270" rx="255" ry="112" transform="rotate(-24 360 270)" />
              <ellipse cx="360" cy="270" rx="205" ry="82" transform="rotate(34 360 270)" />
            </g>
            <g stroke="white" strokeWidth="1.5">
              <path d="M360 112L480 180V318L360 386L240 318V180L360 112Z" />
              <path d="M360 112V250M240 180L360 250L480 180M360 250V386M240 318L360 250L480 318" strokeOpacity=".75" />
              <path d="M360 172L425 209V284L360 321L295 284V209L360 172Z" stroke={palette.accent} fill={palette.soft} fillOpacity=".18" />
            </g>
            <g className="art-pulse">
              <circle cx="360" cy="250" r="34" fill={palette.accent} fillOpacity=".12" />
              <circle cx="360" cy="250" r="7" fill={palette.accent} />
              <circle cx="360" cy="250" r="16" stroke={palette.accent} />
            </g>
            {[[105, 340], [235, 250], [500, 175], [625, 245], [360, 386]].map(([x, y], i) => (
              <g key={i}><circle cx={x} cy={y} r="10" fill={palette.accent} fillOpacity=".15" /><circle cx={x} cy={y} r="3.5" fill={palette.accent} /></g>
            ))}
            <g fill="white" fontFamily="monospace" fontSize="10" letterSpacing="2" opacity=".65"><text x="80" y="465">INPUT</text><text x="325" y="465">PROCESS</text><text x="575" y="465">OUTPUT</text></g>
          </>
        )}

        {variant === "pos" && (
          <>
            <g stroke={palette.accent} strokeWidth="1.5" strokeOpacity=".8">
              <path d="M90 300H205L270 235H390L455 300H625" />
              <path d="M90 330H205L270 265H390L455 330H625" strokeDasharray="4 7" />
              <path d="M205 300V390M390 235V150M455 300V390" strokeDasharray="3 7" />
            </g>
            <g>
              <rect x="92" y="175" width="142" height="124" rx="2" stroke="white" strokeOpacity=".65" />
              <path d="M112 203H207M112 221H184M112 239H197M112 257H166" stroke="white" strokeOpacity=".35" />
              <path d="M112 277H207" stroke={palette.accent} strokeWidth="3" />
              <rect x="270" y="125" width="178" height="180" rx="3" stroke="white" strokeOpacity=".8" fill={palette.soft} fillOpacity=".12" />
              <rect x="290" y="145" width="138" height="88" stroke={palette.accent} strokeOpacity=".8" />
              <path d="M306 168H412M306 185H382M306 202H400" stroke="white" strokeOpacity=".5" />
              <circle cx="359" cy="267" r="13" stroke={palette.accent} /><path d="M352 267L358 273L369 259" stroke={palette.accent} strokeWidth="2" />
              <rect x="490" y="175" width="140" height="124" rx="2" stroke="white" strokeOpacity=".65" />
              <path d="M510 205H610M510 225H590M510 245H602" stroke="white" strokeOpacity=".35" />
              <path d="M510 270H580" stroke={palette.accent} strokeWidth="3" />
            </g>
            <g fill={palette.accent}><circle cx="205" cy="300" r="5" /><circle cx="390" cy="235" r="5" /><circle cx="455" cy="300" r="5" /></g>
            <g fill="white" fontFamily="monospace" fontSize="10" letterSpacing="2" opacity=".65"><text x="100" y="430">ORDER</text><text x="315" y="430">PAYMENT</text><text x="520" y="430">RECORD</text></g>
            <path d="M270 350H448" stroke="white" strokeOpacity=".2" strokeDasharray="2 6" />
          </>
        )}

        {variant === "warehouse" && (
          <>
            <g stroke="white" strokeOpacity=".68" strokeWidth="1.5">
              <path d="M150 180L290 105L430 180V365L290 440L150 365V180Z" />
              <path d="M290 105V285M150 180L290 255L430 180M290 255V440" />
              <path d="M185 199L290 255L395 199M185 245L290 301L395 245M185 291L290 347L395 291" strokeOpacity=".45" />
              <path d="M185 199V337M395 199V337" strokeOpacity=".45" />
            </g>
            <g fill={palette.accent} fillOpacity=".8">
              <path d="M205 205L242 225V258L205 238V205Z" /><path d="M260 235L280 246V279L260 268V235Z" />
              <path d="M315 165L352 185V218L315 198V165Z" /><path d="M315 304L352 324V357L315 337V304Z" />
              <path d="M370 274L390 285V318L370 307V274Z" />
            </g>
            <g stroke={palette.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M80 390H180L230 420H490L550 385H640" />
              <path d="M625 370L640 385L625 400" />
              <path d="M100 150V115H170" strokeDasharray="4 6" />
              <path d="M540 150H610V210" strokeDasharray="4 6" />
            </g>
            <g fill={palette.accent}><circle cx="180" cy="390" r="5" /><circle cx="490" cy="420" r="5" /><circle cx="550" cy="385" r="5" /></g>
            <g fill="white" fontFamily="monospace" fontSize="10" letterSpacing="2" opacity=".65"><text x="82" y="475">RECEIVE</text><text x="300" y="475">STORE</text><text x="550" y="475">DISPATCH</text></g>
          </>
        )}
      </svg>

      {!compact && (
        <div className="absolute bottom-6 left-6 z-10 max-w-[220px] sm:bottom-8 sm:left-8">
          <p className="font-mono text-[10px] tracking-[.16em] text-white/45">A SYSTEMS PERSPECTIVE</p>
          <p className="mt-2 text-xl font-medium tracking-tight text-white">
            {variant === "pos" ? "Every transaction, in its place." : variant === "warehouse" ? "Every movement has a path." : "Make complexity work together."}
          </p>
        </div>
      )}
      <div className="absolute bottom-7 right-7 z-10 font-mono text-[10px] tracking-[.16em] text-white/40">{variant === "company" ? "01 — 03" : variant === "pos" ? "02 — 03" : "03 — 03"}</div>
    </div>
  );
}
