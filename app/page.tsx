import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col align-middle space-4 p-4">
      <h1 className="mb-10">Project Example</h1>
      <Link className="border-2 w-1/4 p-2" href="/users">
        Go to State Example Page
      </Link>
    </div>
  )
}
