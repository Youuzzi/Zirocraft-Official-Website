type SystemsArtworkProps={compact?:boolean;variant?:"company"|"pos"|"warehouse"};
export default function SystemsArtwork({compact=false,variant="company"}:SystemsArtworkProps){
 const accent=variant==="pos"?"#45b9a6":variant==="warehouse"?"#e2a05c":"#6f91ff";
 const label=variant==="pos"?"TRANSACTION FLOW":variant==="warehouse"?"WAREHOUSE FLOW":"CONNECTED OPERATIONS";
 return <div className="system-panel relative min-h-[390px] w-full" aria-label={label}>
  <div className="absolute left-6 top-6 z-10 flex items-center gap-3 font-mono text-[10px] tracking-[.16em] text-white/55 sm:left-8 sm:top-8"><span className="h-2 w-2 rounded-full" style={{backgroundColor:accent}}/><span>ZIROCRAFT / {variant==="company"?"SYSTEM 01":variant==="pos"?"POS 01":"WMS 01"}</span></div>
  <svg viewBox="0 0 720 560" role="img" aria-label={label} className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
   <defs><linearGradient id="cubeStroke" x1="220" y1="100" x2="530" y2="440" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity=".8"/><stop offset="1" stopColor={accent} stopOpacity=".3"/></linearGradient><linearGradient id="cubeFill" x1="250" y1="130" x2="500" y2="440" gradientUnits="userSpaceOnUse"><stop stopColor={accent} stopOpacity=".22"/><stop offset="1" stopColor="#111923" stopOpacity=".04"/></linearGradient></defs>
   <g opacity=".28" stroke="white" strokeWidth="1">{Array.from({length:9},(_,i)=><path key={"v"+i} d={"M"+(80+i*70)+" 0V560"}/>)}{Array.from({length:7},(_,i)=><path key={"h"+i} d={"M0 "+(70+i*70)+"H720"}/>)}</g>
   <g stroke={accent} strokeOpacity=".7" strokeWidth="1.5"><path d="M95 365L235 270L360 330L500 185L635 250"/><path d="M95 365L95 430L235 335L360 395L500 250L635 315" strokeDasharray="5 8"/></g>
   <g className="art-orbit" style={{transformOrigin:"360px 280px"}} stroke="white" strokeOpacity=".3"><ellipse cx="360" cy="280" rx="255" ry="115" transform="rotate(-24 360 280)"/><ellipse cx="360" cy="280" rx="205" ry="82" transform="rotate(34 360 280)"/></g>
   <g stroke="url(#cubeStroke)" strokeWidth="1.5" fill="url(#cubeFill)"><path d="M360 105L495 180V335L360 410L225 335V180L360 105Z"/><path d="M360 105V255M225 180L360 255L495 180M360 255V410"/><path d="M225 335L360 255L495 335"/><path d="M360 175L425 212V286L360 323L295 286V212L360 175Z" fill={accent} fillOpacity=".14"/></g>
   <g className="art-pulse"><circle cx="360" cy="250" r="34" fill={accent} fillOpacity=".13"/><circle cx="360" cy="250" r="7" fill={accent}/><circle cx="360" cy="250" r="15" stroke={accent} strokeOpacity=".7"/></g>
   {[[95,365],[235,270],[500,185],[635,250],[360,410]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="10" fill={accent} fillOpacity=".16"/><circle cx={x} cy={y} r="3.5" fill={accent}/></g>)}
   <g fill="white" fontFamily="monospace" fontSize="10" letterSpacing="2" opacity=".65"><text x="78" y="475">INPUT</text><text x="325" y="475">PROCESS</text><text x="575" y="475">OUTPUT</text></g>
  </svg>
  {!compact&&<div className="absolute bottom-6 left-6 z-10 max-w-[220px] sm:bottom-8 sm:left-8"><p className="font-mono text-[10px] tracking-[.16em] text-white/45">A SYSTEMS PERSPECTIVE</p><p className="mt-2 text-xl font-medium tracking-tight text-white">Make complexity work together.</p></div>}
  <div className="absolute bottom-7 right-7 z-10 font-mono text-[10px] tracking-[.16em] text-white/40">01 — 03</div>
 </div>;
}