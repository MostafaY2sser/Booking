import "./MailList.css"



const MailList = () => {
    return (
        <div className="mailList">
            <h1 className="mailListTitle">Save time, save money!</h1>
            <p className="mailListDesc">Sign up and we will send the best deals to you</p>
            <div className="mailListSearch">
                <input type="text"  placeholder="your Email"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList














