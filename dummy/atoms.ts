import { atomWithStorage } from "jotai/utils"

export type User = {
  avatar: string
  email: string
  first_name: string
  id: number
  last_name: string
}

// will store user detail to local storage (keep atom data after refresh browser)
export const userDetailAtom = atomWithStorage<User | null>("userDetail", null)
export const currentUserAtom = atomWithStorage<any>("", null)
