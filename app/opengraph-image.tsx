import { ImageResponse } from "next/og";

export const alt = "Betini Academy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "#F4F4F0",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 8,
            color: "#9A9A94",
            textTransform: "uppercase",
            marginBottom: 24,
            display: "flex",
          }}
        >
          Betini Academy
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.15,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span>Fature&nbsp;</span>
          <span style={{ color: "#2BE37F" }}>mais de R$ 3M/mês&nbsp;</span>
          <span>nos marketplaces</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
