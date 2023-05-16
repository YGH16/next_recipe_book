export default function Login() {
  return (
    <div className="login_form">
        <input type="email" name="email_address" placeholder="Email" className="m-5 p-2" />
        <br />
        <input type="password" name="password" placeholder="Password" className="m-5 p-2" />
        <br />
        <button type="submit" className="m-5 pl-5 pr-5 pt-2 pb-2 border-none rounded-full bg-slate-400 ">Submit</button>
    </div>
  )
}
