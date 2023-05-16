import Image from 'next/image'
import LoginComponent from './components/Login';
import ReviewBox from './components/Review_box'

export default function Home() {
  return (
    <div className='landing_page_wrapper'>

      <div className="title_section mt-5 ml-5">
        <h1 className='landing_title pb-0.5 font-bold text-xl'>The Recipe Book</h1>
        <h2 className='landing_subtitle font-light'>Your One Stop for sharing Recipes</h2>
      </div>

      <div className="info_section mt-10 m-5 p-5 border-solid border border-indigo-950 rounded">
        <p>Hi all, Welcome to the Recipe Book, this started as a project to start learning building on my existing but limited knowledge on React as well as learning more about Next.JS</p>
      </div>

      <div className="landing_login_form text-center mt-10 ">
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
