"use client"

import { useRef, useState } from "react"

export default function OtpInput({
  length = 4,
  onComplete,
}: {
  length?: number
  onComplete?: (code: string) => void
}) {
  const [values, setValues] = useState<string[]>(Array.from({ length }, () => ""))
  const refs = useRef<Array<HTMLInputElement | null>>([])

  const handleChange = (idx: number, val: string) => {
    const char = val.slice(-1).replace(/\s/g, "")
    const next = [...values]
    next[idx] = char
    setValues(next)
    if (char && idx < length - 1) {
      refs.current[idx + 1]?.focus()
    }
    if (next.every(Boolean)) onComplete?.(next.join(""))
  }

  return (
    <div className="flex items-center justify-center gap-5">
      {values.map((v, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          value={v}
          onChange={(e) => handleChange(i, e.target.value)}
          inputMode="numeric"
          pattern="\d*"
          maxLength={1}
          className="h-12 w-12 rounded-full border border-slate-300 text-center text-lg font-medium shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      ))}
    </div>
  )
}
