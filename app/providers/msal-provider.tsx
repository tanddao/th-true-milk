"use client"

import { AuthenticationResult, EventMessage, EventType, PublicClientApplication } from "@azure/msal-browser"
import { MsalProvider } from "@azure/msal-react"
import { msalConfig } from "../authConfig"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export const msalInstance = new PublicClientApplication(msalConfig)

//get initialize msalInstance
msalInstance.initialize()

const activeAccount = msalInstance.getActiveAccount()

if (!activeAccount) {
  // Account selection
  const accounts = msalInstance.getAllAccounts()
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0])
  }
}

//set the account
msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const authenticationResult = event.payload as AuthenticationResult
    const account = authenticationResult.account
    msalInstance.setActiveAccount(account)
  }
})

//enable account storage event
msalInstance.enableAccountStorageEvents()

export default function MSALProvider({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}>) {
  /**
   * useMsal is hook that returns the PublicClientApplication instance,
   * an array of all accounts currently signed in and an inProgress value
   * that tells you what msal is currently doing. For more, visit:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
   */

  const router = useRouter()

  useEffect(() => {
    msalInstance.handleRedirectPromise().then((response) => {
      if (response && response.account) {
        // User is authenticated, you can proceed to  app
        return
        // router.replace("/")
      }
    })
    // Check if the user is already signed in
    const account = msalInstance.getActiveAccount()
    if (account) {
      // User is already signed in, you can proceed to  app
      return
      // router.replace("/")
    } else {
      // If the user is not signed in, initiate the login process
      msalInstance.initialize()
      router.replace("/")
    }
  }, [router])

  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>
}
