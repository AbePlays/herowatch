import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return <p>Select movies or tv shows to see more info.</p>
}
