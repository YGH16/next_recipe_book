import Image from 'next/image'
import LoginComponent from './components/Login';
import ReviewBox from './components/Review_box';
import Navbar from './components/Navigation_bar';
import SiteHeader from './components/Site_header'

export default function Home() {
  return (
    <div className='landing_page_wrapper'>

      <div className="title_section">
        <SiteHeader></SiteHeader>
      </div>

      <div className="navigation_section">
        <Navbar></Navbar>
      </div>

      <div className="info_section mt-10 m-5 p-5 border-solid border border-indigo-950 rounded">
        <p>Hi all, Welcome to the Recipe Book, this started as a project to start learning building on my existing but limited knowledge on React as well as learning more about Next.JS</p>
      </div>

      <div className="landing_login_form">
        <h3 className='text-lg'>Login to the Recipe Book</h3>
        <LoginComponent></LoginComponent>
      </div>

      <div className="reviews_section mt-10">
        <h4 className='ml-5 text-lg'>Reviews</h4>

        <div className=' p-5'>
        <ReviewBox></ReviewBox>
        <ReviewBox></ReviewBox>
        </div>
      </div>

    </div>
  )
}
