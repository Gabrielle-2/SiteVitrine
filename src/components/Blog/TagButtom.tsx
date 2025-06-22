// src/components/Blog/TagButton.tsx
import React from "react";

export default function TagButton({ tag }: { tag: string }) {
  return <button className="px-3 py-1 bg-gray-200 rounded">{tag}</button>;
}
