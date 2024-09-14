import "./Home.css"
import Navbar from "../../Components/Navbar/Navbar"
import Header from "../../Components/Header/Header"
import  Featuered from "../../Components/Featured/Featured"
import  PropertyList from "../../Components/PropertyList/PropertyList"
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties"
import MailList from "../../Components/MailList/MailList"
import Footer from "../../Components/Footer/Footer"


const Home = () => {
    return (
    <div className='home'>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featuered/>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Homes guests love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
        </div>
    </div>
    )
}

export default Home
