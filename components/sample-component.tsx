'use client'

import { useQueryUsers } from './useQueryUsers'
import { User, userDetailAtom } from '@/dummy/atoms'

import cx from 'classix'
import { useSetAtom } from 'jotai'
import { useRouter } from 'next/navigation'

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
    <div className="flex justify-center flex-col space-y-4">
      <div>Sample Component - Example code with react-query and jotai atom</div>
      <p>{isFetching ? 'Fetching users ...' : ''}</p>
      <button
        className={cx('border p-2', isFetching ? 'opacity-50 cursor-not-allowed' : 'opacity-100')}
        onClick={fetchDummyData}
      >
        fetch users
      </button>
      <ul>
        {data?.data.data.map((user: User) => (
          <li key={user.id}>
            <button onClick={() => setActiveUser(user)}>
              {user.first_name} {user.last_name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
