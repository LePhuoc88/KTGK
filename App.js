import React from "react"
import { View, Text } from "react-native"
import { Provider } from "react-redux"
import { firestore } from "@react-native-firebase/firestore"
import Root from './Src/navigations/Root'

const App=()=> {
    return(
        <Root/>
    )
}

export default App;
