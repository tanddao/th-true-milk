"use client"

import { userDetailAtom } from "@/dummy/atoms"
import { useAtomValue } from "jotai"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function UserDetails({ params }: Readonly<{ params: { id: string } }>) {
  const userDetails = useAtomValue(userDetailAtom)
  const router = useRouter()

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {params.id}</p>
      <p>User Name: {userDetails?.first_name + " " + userDetails?.last_name}</p>
      <p>User Email: {userDetails?.email}</p>
      {userDetails?.avatar && (
        <Image src={userDetails?.avatar} alt={userDetails?.first_name} width={250} height={250} />
      )}
      <button className='border p-4' onClick={router.back}>
        back to users list
      </button>
    </div>
  )
}
