"use client"

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-json"; // importa el lenguaje (en tu caso, JSON)

export default function CodeBlock({ code, language = "json" }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="bg-[#343434] text-white p-4 rounded-2xl overflow-x-auto">
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}