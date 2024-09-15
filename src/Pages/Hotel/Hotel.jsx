import "./Hotel.css"
import Header from './../../Components/Header/Header';
import Navbar from './../../Components/Navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot,  } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Components/Footer/Footer";
import MailList from './../../Components/MailList/MailList';
import { useState } from "react";




const Hotel = () => {



    // Slider Images:----
    const[ sliderNumder , setSliderNumber ] = useState(0)
    const[ open , setOpen ] = useState(false)

    const photos = [
        { src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",},
        { src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",},
        { src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",},
        { src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",},
        { src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",},
        { src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",},
    ];


    // open and Close  SLider :---------------
    const handleOpen = (index) => {
        setSliderNumber(index)
        setOpen(true)
    }


    // Arrow Move :---------
    const hanleMove = (direction) => {
        let newSliderNumber ;

        if( direction === "left" ){
            newSliderNumber = sliderNumder === 0 ? 5 : sliderNumder - 1 ; 
        }
        else {
            newSliderNumber = sliderNumder === 5 ? 0 : sliderNumder + 1 ; 
        }
        setSliderNumber( newSliderNumber )
    } 


    return (
        <div className="hotel">
            <Navbar/>
            <Header  type="list"/>
            <div className="hotelContainer">

                { open && <div className="slider">
                    <FontAwesomeIcon className="close"  onClick={()=> setOpen(false)}  icon={faCircleXmark} />
                    <FontAwesomeIcon  className="arrow" onClick={()=> hanleMove("left")}  icon={faCircleArrowLeft} />
                    <div className="sliderWrapper">
                        <img src={photos[sliderNumder].src} alt="" className="slideImg" />
                    </div>
                    <FontAwesomeIcon  className="arrow" onClick={()=> hanleMove("right")} icon={faCircleArrowRight} />
                </div>}


                <div className="hotslWrapper">
                    <button className="reserveHotel">Reserve or Book Now!</button>
                    <div className="hotelTitle">Grand hotel</div>
                    <div className="hotelAdress">
                        <FontAwesomeIcon  icon={faLocationDot}/>
                        <span>Elton ST 125 New York</span>
                    </div>
                    <span className="hotelDistance">Excellent location – 500m from center</span>
                    <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                            { photos.map((photo , index )=> 
                                <div className="hotelImgWrappr">
                                    <img  key={index} onClick={()=> handleOpen(index)} src={photo.src} alt="" className="hotelImage" />
                                </div>
                            )}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailText">
                            <h1 className="hotelTitle">Stay in the heart of City</h1>
                            <p  className="hotelDescription">Located a 5-minute walk from St. Florian is Gate in Krakow, Tower
                                Street Apartments has accommodations with air conditioning and
                                free WiFi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Kraków–Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>in the real heart of Krakow, this property has anexcellent location score of 9.8!</span>
                            <h2><b>$945</b> (9 nights)</h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
            </div>
            <MailList/>
            <Footer/>
        </div>
    );
}

export default Hotel;