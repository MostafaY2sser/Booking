import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed , faCalendarDays, faCar, faPerson, faPlane, faTaxi , faMagnet,  } from '@fortawesome/free-solid-svg-icons'; 
import { DateRange } from 'react-date-range';
import {  useState } from 'react';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom' 



const Header = ( { type } ) => {
//  JS  :_____________________________________________________________________________________________

    //  Show and Disaper the Calender :---------------
    const [ openDate , setOpenDate ] = useState(false)
    const [ destination , setDestination ] = useState("")

    //  Create Calender :-------------
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    // Show and disaper the Range Person :----
    const [ openOption , setOpenOption ] = useState(false)


    // Crate Range Person :-------------------
    const [ option , setOPtion ] = useState({
        adultes : 1 ,
        children  : 0 , 
        room : 1 ,
    })
    
    const handelOption = ( name , operation ) => {
        setOPtion( (prev) => { 
            return {
            ...prev , [name] : operation === "i"  ? option[name] + 1  :option[name] - 1 
        }})
    }



    //  Go To Hotels Search :---------
    const navigate = useNavigate()
    const handleSearch = () =>{
        navigate("hotelsSearch" , {state:{ destination , date , option }})
    }



//  JSX  :_____________________________________________________________________________________________
    return (
        <div className={ type === "list" ? "header listMode" : "header"}>
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem  active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faMagnet} />
                        <span>Attrractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>  
                { type !== "list" && 
                <>
                <h1 className="headerTitle">Find your next stay</h1>
                <p className="headerdesc">Search low prices on hotels, homes and much more...</p>
                <button className="headerBtn">Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon  icon={faBed}  className="headerSearchBedIcon"/>
                        <input  className="headerSearchInput" type="text" 
                            placeholder="Where are you going"
                            onChange={(e)=> setDestination(e.target.value)}/>
                    </div>

                    {/*  Range  Date  --------------------- */}
                    <div className="headerSearchItem">
                        <FontAwesomeIcon  icon={faCalendarDays}  className="headerSearchBedIcon"/>
                        <span  onClick={()=> setOpenDate(!openDate)} className="haederSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="dateRange"
                        />}
                    </div>
                    {/*  Range Date  --------------------- */}


                    {/* Range Options --------------------- */}
                    <div className="headerSearchItem">
                        <FontAwesomeIcon  icon={faPerson}  className="headerSearchBedIcon"/>
                        <span  onClick={() => setOpenOption(!openOption)}  className="haederSearchText">{`${option.adultes} adultes  - ${option.children} children  -  ${option.room} room`}</span>
                        { openOption && <div className="optionList">
                            <div className="optionItem">
                                <div className="name">Adulte</div>
                                <div className="number">
                                    <button  disabled={option.adultes <= 1}  className="optionBtn" onClick={ () =>handelOption( "adultes" , "d" )} >-</button>
                                        <span className="counter">{option.adultes}</span>
                                    <button  disabled={option.adultes >= 20 } className="optionBtn"  onClick={ () =>  handelOption( "adultes" , "i" )}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <div className="name">Children</div>
                                <div className="number">
                                    <button    disabled={option.children <= 1}    className="optionBtn"  onClick={ () =>  handelOption( "children" , "d" )} >-</button>
                                        <span className="counter">{option.children}</span>
                                    <button   disabled={option.children >= 20 } className="optionBtn"  onClick={ () =>  handelOption( "children" , "i" )}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <div className="name">Room</div>
                                <div className="number">
                                    <button    disabled={option.room <= 1}    className="optionBtn"  onClick={ () =>  handelOption( "room" , "d" )}>-</button>
                                        <span className="counter">{option.room}</span>
                                    <button   disabled={option.room >= 20 }  className="optionBtn"  onClick={ () =>  handelOption( "room" , "i" )}>+</button>
                                </div>
                            </div>
                            <button className="optionDone">Done</button>
                        </div>}
                    </div>
                    {/* Range Options  --------------------- */}

                    <div    className="headerSearchItem">
                        <button  className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>}

            </div>
        </div> 
    )
}

export default Header
