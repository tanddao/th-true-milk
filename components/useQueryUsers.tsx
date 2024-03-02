import { getDummyUsers } from '@/dummy/dummy-api'
import { useQuery } from '@tanstack/react-query'

export const useQueryUsers = () => {
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => getDummyUsers(),
    enabled: false,
  })

  return usersQuery
}
