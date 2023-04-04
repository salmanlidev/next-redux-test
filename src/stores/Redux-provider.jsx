"use client"

import { Provider } from "react-redux";
import { store } from "./index"


function ProviderHandler({ children }) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ProviderHandler