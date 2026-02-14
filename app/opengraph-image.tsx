import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Deeply — A podcast app for intentional listening";
export const size = {
  width: 1200,
  height: 630,
};
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
          background: "linear-gradient(135deg, #060d18 0%, #0a2461 50%, #0c1a2e 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(10,186,255,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(144,223,210,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#e8f0f8",
              letterSpacing: "-2px",
              lineHeight: 1,
              display: "flex",
            }}
          >
            Deeply
          </div>

          {/* Accent line */}
          <div
            style={{
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, #0abaff, #90dfd2)",
              borderRadius: 2,
              marginTop: 24,
              marginBottom: 24,
              display: "flex",
            }}
          />

          <div
            style={{
              fontSize: 32,
              fontWeight: 300,
              color: "#0abaff",
              letterSpacing: "4px",
              textTransform: "uppercase" as const,
              display: "flex",
            }}
          >
            Listen with intention
          </div>

          <div
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "rgba(232,240,248,0.6)",
              marginTop: 16,
              display: "flex",
            }}
          >
            A podcast app for intentional listening
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
