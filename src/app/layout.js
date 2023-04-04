import Header from "../components/Header"
import { store } from "../stores"
import { fetchUser } from "../stores/user-stores"
import ReduxProvider from "../stores/Redux-provider"
import "./globals.css"

async function RootLayout({ children }) {
  await store.dispatch(fetchUser())


  return (
    <html>
      <head />
      <ReduxProvider>
        <body className="bg-zinc-800 text-white">
          <Header user={store.getState().user.user} />
          {children}
        </body>
      </ReduxProvider>
    </html>
  )
}

export default RootLayout