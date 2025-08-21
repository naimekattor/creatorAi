"use client";

import { useSearchParams } from "next/navigation";

export default function CreatorParams() {
  const searchParams = useSearchParams();
  const param = searchParams.get("someParam");

  return <p>Query Param: {param || "None"}</p>;
}