"use client"

import { loginRequest } from "@/app/authConfig"
import { currentUserAtom } from "@/dummy/atoms"
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react"
import { Button } from "antd"
import { useAtom } from "jotai"

export default function MSALAuth({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}>) {
  const { instance, accounts } = useMsal()
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom)

  if (accounts.length && !currentUser) {
    setCurrentUser(accounts[0])
  }

  const handleLoginPopup = () => {
    instance
      .loginPopup({
        ...loginRequest,
        redirectUri: "http://localhost:3000/",
      })
      .catch((error) => console.log(error))
  }

  const handleLogoutPopup = () => {
    instance.logoutPopup({
      mainWindowRedirectUri: "http://localhost:3000/",
    })
  }

  const handleLogoutRedirect = () => {
    instance.logoutRedirect()
  }

  return (
    <>
      <UnauthenticatedTemplate>
        <Button onClick={handleLoginPopup}>Sign in using Popup</Button>
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <Button onClick={handleLogoutPopup}>Sign out using Popup</Button>
        <br />
        <Button onClick={handleLogoutRedirect}>Sign out using Redirect</Button>
        <br />
        {currentUser && (
          <p>
            Logged in as {currentUser?.name} ({currentUser?.username})
          </p>
        )}
        <div className='p-12'>{children}</div>
      </AuthenticatedTemplate>
    </>
  )
}
