import { Link } from "react-router-dom";
import styles from './navbar.module.css';
import redLine from '../../assets/svg/redLine.svg'
import mainlogo from '../../assets/svg/mainLogo.svg'
import findKFC from '../../assets/svg/findKFC.svg'
import signin from '../../assets/svg/signin.svg'
import cart from '../../assets/svg/cart.svg'
import location from '../../assets/svg/location.svg'
export default function Navbar(){
    
    return(
        <nav>
            <div >
                <img className={styles.redstrip} src={redLine} alt="redLine" />
                <div className={styles.firstDiv}>
                    <ul className={styles.firstSubDiv}>
                        <li className={styles.leftPartTopNav}>
                            <Link to="/"><img className={styles.mainLogo} src={mainlogo} alt="mainLogo" /></Link>
                            <Link to="/menu"><p>Menu</p></Link>
                            <Link to="/"><p>Careers</p></Link>
                            <Link to="/"><p>About</p></Link>
                            <Link to="/"><p>Find A KFC </p> <img height={"10rem"} style={{ padding: "0px 5px", cursor: "pointer" }} src={findKFC} alt="" /></Link>
                        </li>
                        <li className={styles.rightPartTopNav}>
                            <div className={styles.StartButton} ><Link to="/menu" style={{ color: "white", textDecoration: "none" }} >Start Order</Link></div>
                            <div>
                                <Link to="/"><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={signin} alt="" /></Link>
                                <Link to="/"><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={cart} alt="" /></Link>
                            </div>
                        </li>
                    </ul>
                    <div className={styles.secondFindNav}>
                        <Link to={"/"} className={styles.secondFindNav1} style={{ fontWeight: "500", alignItems: "center" }}>
                            <img height={"20rem"} style={{ padding: "2px 10px 0px 0px", cursor: "pointer", flexDirection: "row", alignItems: "center" }} src={location} alt="" />
                            Start an Order for Pickup or Delivery
                        </Link>
                    </div>
                </div>
            </div>
            
            
        </nav>
    )
}

