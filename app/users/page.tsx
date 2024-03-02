import SampleComponent from "@/components/sample-component"
import Link from "next/link"

export default function StateExample() {
  return (
    <div className='p-4 space-4'>
      <div className='mb-10'>
        <Link className='border p-2' href='/'>
          To home page
        </Link>
      </div>
      <SampleComponent />
    </div>
  )
}
