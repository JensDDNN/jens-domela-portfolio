"use client";

import { useState } from "react";
import Lightbox from "../../components/Lightbox";

export default function TestLightbox() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main style={{ padding: "4rem" }}>
      <h1>Lightbox Test</h1>

<img
  src="/images/DSC_1344.jpg"
  alt="Test Image"
  onClick={() => setSelectedImage("/images/DSC_1344.jpg")}
  style={{
    width: "100%",
    maxWidth: "800px",
    cursor: "pointer",
    display: "block",
  }}
/>

      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}
