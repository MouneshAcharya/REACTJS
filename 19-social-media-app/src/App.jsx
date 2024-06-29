import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './components/Sidebar'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import Footer from './components/Footer'
import SMProvider from './store'
import { useState } from 'react'

function App() {

  const [selMenu, setSelMenu] = useState("Home")

  const onSelectionChange = (selection) => {
    console.log(selection)
    setSelMenu(selection)
  }

  return (
    <SMProvider>
      <div className="smContainer">
          <SideBar selMenu={selMenu} onSelectionChange={onSelectionChange}/>
          <div className="smContentContainer">
              <Home/>
              {selMenu === "Create Post" && <CreatePost/>}
              {selMenu === "Home" && <PostList/>}
              <Footer/>
          </div>
      </div>
    </SMProvider>
  )
}

export default App
