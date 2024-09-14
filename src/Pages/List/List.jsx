import "./List.css"
import Navbar from './../../Components/Navbar/Navbar';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer"
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { format } from "date-fns";
import SearchItem from "../../Components/SearchItem/SearchItem";




const List = () => {



    const location = useLocation()
    const[ destination , setSeatination ] = useState(location.state.destination)
    const[ date , setDate ] = useState(location.state.date)
    const[ option , setOption ] = useState(location.state.option)



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
                        <div className="lsItem">
                            <label>Options</label>
                            <div className="lsOptions">
                            <div className="lsoptionItem">
                                <span className="lsOptionText">
                                    Min Price <small>per night</small>
                                </span>
                                <input type="text" className="lsOptionInput" />
                            </div>
                            <div className="lsoptionItem">
                                <span className="lsOptionText">
                                    Max Price <small>per night</small>
                                </span>
                                <input type="text" className="lsOptionInput" />
                            </div>
                            <div className="lsoptionItem">
                                <span className="lsOptionText" >
                                    Adult
                                </span>
                                <input type="number"  min={1}  max={10} className="lsOptionInput"  placeholder={option.adultes} />
                            </div>
                            <div className="lsoptionItem">
                                <span className="lsOptionText">
                                    Children
                                </span>
                                <input type="number"  min={0}  max={10} className="lsOptionInput"  placeholder={option.children} />
                            </div>
                            <div className="lsoptionItem">
                                <span className="lsOptionText">
                                    Room
                                </span>
                                <input type="number"  min={1}   max={10} className="lsOptionInput"  placeholder={option.room}/>
                            </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
            <Footer className="listFooter"/>
        </div>
    );
}

export default List;