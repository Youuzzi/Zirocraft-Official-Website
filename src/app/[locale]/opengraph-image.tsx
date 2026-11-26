import { ImageResponse } from "next/og";

export const alt = "ZiroCraft — Building Digital Solutions for Modern Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params;
  const id = locale === "id";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#15191f",
          color: "#f5f4f0",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -100,
            top: -140,
            width: 620,
            height: 620,
            border: "1px solid rgba(255,255,255,.16)",
            transform: "rotate(12deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 110,
            top: 105,
            width: 390,
            height: 390,
            background: "#315fea",
            display: "flex",
            padding: 28,
            transform: "rotate(4deg)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              border: "1px solid rgba(255,255,255,.35)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 26,
            }}
          >
            <span style={{ fontSize: 14, letterSpacing: 4, color: "#dce5ff" }}>
              ZC / DIGITAL SYSTEMS
            </span>
            <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
              <div style={{ width: 190, height: 12, background: "#ffffff" }} />
              <div style={{ width: 68, height: 12, background: "rgba(255,255,255,.45)" }} />
            </div>
            <span style={{ fontSize: 15, letterSpacing: 3, color: "#dce5ff" }}>
              BUILT AROUND REAL WORK
            </span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 710, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 13, height: 13, background: "#315fea" }} />
            <span style={{ fontSize: 21, fontWeight: 700, letterSpacing: 3 }}>ZIROCRAFT</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <span style={{ color: "#9db4ff", fontSize: 16, letterSpacing: 4, textTransform: "uppercase" }}>
              {id ? "Teknologi dengan tujuan" : "Technology with intent"}
            </span>
            <h1 style={{ margin: 0, fontSize: 60, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3 }}>
              {id ? "Membangun solusi digital untuk bisnis modern." : "Building digital solutions for modern businesses."}
            </h1>
            <p style={{ margin: 0, maxWidth: 620, color: "rgba(245,244,240,.66)", fontSize: 21, lineHeight: 1.5 }}>
              {id ? "Perangkat lunak yang membantu pekerjaan bisnis menjadi lebih terarah." : "Practical software for clearer business operations."}
            </p>
          </div>
          <span style={{ color: "rgba(245,244,240,.45)", fontSize: 13, letterSpacing: 3 }}>
            SOFTWARE / PRODUCT DEVELOPMENT
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
