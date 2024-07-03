import About from "../../components/about/About"
import Contact from "../../components/contact/Contact"
import Home from "../../components/home/Home"
import Navbar from "../../components/navbar/Navbar"
import Project from "../../components/projects/Project"
import "./page.scss"

const Page = () => {
  return (
    <div className="page">
      <Navbar/>
      <Home/>
      <Project/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Page