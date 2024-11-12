import { useState } from "react"
import Info from "./components/Info/Info"
import Navbar from "./components/Navbar/Navbar"
import Recommend from "./components/Recommend/Recommend"
import Update from "./components/Update/Update"
import { Provider } from "react-redux"
import { store } from "./store/store"

const App = () => {


  return (
    <Provider store={store}>
      <Navbar />
      <Info />
      <div className="main__container">
        <div className="update">
          <Update />
        </div>
        <div className="sidebar">
          <Recommend />
        </div>
      </div>
    </Provider>

  )
}

export default App
