"use client";

import { useState } from "react";

export default function WinterSilence() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/images/DSC_1344.jpg",
    "/images/DSC_1341.jpg",
    "/images/DSC_1314.jpg",
    "/images/DSC_1307.jpg",
  ];

  return (
    <main style={{ padding: "4rem" }}>
      <h1>Winter Silence</h1>

      <p>
        A photographic exploration of atmosphere,
        absence and stillness.
      </p>

      {images.map((src) => (
        <img
          key={src}
          src={src}
          alt="Winter Silence"
          onClick={() => setSelectedImage     marginTop: "2rem",
            cursor: "pointer",
            display: "block",
          }}
        />
      ))}

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
               style={{
              maxWidth: "95vw",
              maxHeight: "95vh",
              objectFit: "contain",
            }}
          />

          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "2rem",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}
``
