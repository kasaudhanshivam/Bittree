import { Suspense } from "react"
import GenerateClient from "./generateClient"

export const dynamic = "force-dynamic" // optional, ensures dynamic rendering if needed

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <GenerateClient />
    </Suspense>
  )
}