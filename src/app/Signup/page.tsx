import SiteHeader from "../components/Site_header"
import Navbar from "../components/Navigation_bar"
import Login from '../components/Login'
export default function page() {
  return (
    <div className="signup_page m-5">
        
        <div className="title_section">
            <SiteHeader></SiteHeader>
        </div>

        <div className="navigation_section">
            <Navbar></Navbar>
        </div>

        <div className="login_section">
            <Login></Login>
        </div>

        

    </div>
  )
}
