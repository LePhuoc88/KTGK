import React from "react"
import Root from './Src/navigations/Root'
import { StoreProvider } from "./Src/store"

const App=()=> {
    return(
        <StoreProvider>
            <Root/>
        </StoreProvider>
    )
}

export default App;
