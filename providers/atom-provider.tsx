import { Provider } from 'jotai'

export default function AtomProvider({
  children,
}: Readonly<{
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}>) {
  return <Provider>{children}</Provider>
}
