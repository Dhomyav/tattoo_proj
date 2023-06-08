import './Landing.css'
import land from '../../asset/img/slide.avif'
import { Link } from "react-router-dom"
import { Button } from "@mui/material";

const Landing = () => {
    return ( 
        <>
        <div className="landing__image__container">
                <img className="landing__image" src={land} alt=""/>
        </div>
        <div className="landing__container">
            
            <div className="landing__header__container">
                <div className="landing__header">
                    <h1 className="landing__header__main">Free Hand Marker Shop</h1>
                    <p className="landing__header__discount">Become your own tattoo artist with our one-of-a-kind suite of freehand tools. Perfect for date nights, house parties, beach days, study breaks… the list goes on.</p>
                    
                    <Link to="/shop">
                        <Button variant='outlined' sx={[ {width: '190px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: 'none', borderColor: 'black', color: 'black,' }, {'&:hover': {  backgroundColor: "black" , color: "#FFE26E", borderColor: 'black'}}]}>SHOP NOW</Button>
                    </Link>
                </div>
            </div>
            
        </div>
        </>
     );
}
 
export default Landing;