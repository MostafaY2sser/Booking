import "./List.css"
import Navbar from './../../Components/Navbar/Navbar';
import Header from "../../Components/Header/Header";
// import Footer from "../../Components/Footer/Footer"
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { format } from "date-fns";




const List = () => {



    const location = useLocation()
    const[ destination , setSeatination ] = useState(location.state.destination)
    const[ date , setDate ] = useState(location.state.date)
    // const[ option , setOption ] = useState(location.state.option)



    return ( 
        <div className="list">
            <Navbar/>
            <Header  type="list"/>
            <div className="listContainer">
                <div className="listWripper">

                    <div className="listSearch">
                        <h1 className="lsTiitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            <input type="text"  placeholder={destination} />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                        </div>
                    </div>

                    <div className="listResult">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita distinctio ipsam dolore exercitationem eaque laudantium autem error facilis sint repellendus minima possimus ad ratione cupiditate, voluptatibus beatae nam iste dolorum!</p>
                    </div>


                </div>
            </div>




            {/* <Footer/> */}
        </div>
    );
}

export default List;