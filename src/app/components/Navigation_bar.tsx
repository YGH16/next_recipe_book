import Link from "next/link"
export default function Navigation_bar() {
  return (
    <div className="navigation_bar">
        <ul className="list-none">
            <li className="inline p-4">Home</li>
            <li className="inline p-4">Login</li>
            <li className="inline p-4">Signup</li>
        </ul>
    </div>
  )
}
