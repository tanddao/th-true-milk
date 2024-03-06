"use client"

import { Button } from "antd"
import { useQueryUsers } from "./useQueryUsers"
import { User, userDetailAtom } from "@/dummy/atoms"

import cx from "classix"
import { useSetAtom } from "jotai"
import { useRouter } from "next/navigation"

export default function SampleComponent() {
  const { refetch, data, isFetching } = useQueryUsers()
  const setUserDetail = useSetAtom(userDetailAtom)
  const router = useRouter()

  const fetchDummyData = () => {
    refetch()
  }

  const setActiveUser = (user: User) => {
    router.push(`/users/${user.id}`)
    setUserDetail(user)
  }

  return (
    <div className='flex justify-center flex-col space-y-4'>
      <div>Sample Component - Example code with react-query and jotai atom</div>
      <p>{isFetching ? "Fetching users ..." : ""}</p>
      <Button
        className={cx("border p-2", isFetching ? "opacity-50 cursor-not-allowed" : "opacity-100")}
        onClick={fetchDummyData}
      >
        fetch users
      </Button>
      <ul>
        {data?.data.data.map((user: User) => (
          <li key={user.id}>
            <Button onClick={() => setActiveUser(user)}>
              {user.first_name} {user.last_name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
