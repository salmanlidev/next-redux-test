"use client"

import { useRouter } from "next/navigation"

export const BackButton = () => {
    const router = useRouter()
    return (
        <button onClick={() => router.push("/")} className="bg-none underline-offset-1 text-white self-start">Geri Don</button>
    )
}
