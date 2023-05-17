export default function Feed() {
    const auth_status = true

    if(!auth_status){
        return("You are not logged in")
    }

    return(
        <div className="feed_page m-5">

            <div className="feed_page_title">
                <h1 className="text-lg">Feed Page</h1>
            </div>

        </div>
    )
}