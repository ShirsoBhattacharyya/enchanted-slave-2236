import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import instagram from "../../assets/svg/instagram.svg"
import facebook from "../../assets/svg/facebook.svg"
import twitter from "../../assets/svg/twitter.svg"
import footkfc from "../../assets/svg/footkfc.svg"
export default function Footer(){
    return (
            <div className={styles.footermaindiv}>
                <div className={styles.container44}>
                    <br />
                    <br />
                    <p style={{fontWeight:"100",fontSize:"12px"}}>Calorie Statement</p>
                    <p style={{fontWeight:"100",fontSize:"12px"}}>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition
                        information available upon request in-store and on kfc.com.<br /> Prices, participation, and product availability
                        may vary.</p>
                    <br />
                    <br />
                    <br />
                    <p style={{fontWeight:"100",fontSize:"12px"}}>Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Sierra Mist are registered trademarks of PepsiCo, Inc.<br />
                        Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.</p>
                    <br />
                    <br />
                    <div className={styles.boxes44}>
                        <div className={styles.kfcimg}>
                            <div className={styles.cards44}>
                                <img height={"110rem"} style={{ padding: "0px 5px", cursor: "pointer" }} src={footkfc} alt="" />
                            </div>
                        </div>
                        <div className={styles.allCards}>
                            <div className={styles.cards44}>
                                <ul>
                                    <p>KFC Food</p>
                                    <li>Menu</li>
                                    <li>Full Nutrition Guide</li>
                                    <li>Nutrition Calculator</li>
                                    <li>Food Allergies & Sensitivities</li>
                                </ul>
                            </div>
                            <div className={styles.cards44}>
                                <ul>
                                    <p>Company</p>
                                    <li>About KFC</li>
                                    <li>How We Make Chicken</li>
                                    <li>KFC Foundation</li>
                                    <li>Company Responsibility</li>
                                    <li>Franchise a KFC</li>
                                    <li>Resposible Disclosure</li>
                                    <li>KFC Newsroom</li>
                                </ul>
                            </div>
                            <div className={styles.cards44}>
                                <ul>
                                    <p>Career</p>
                                    <li>Restaurant Careers</li>
                                    <li>Corporate Careers</li>
                                    <li>Culture</li>
                                    <li>Growth</li>
                                </ul>
                            </div>
                            <div className={styles.cards44}>
                                <ul>
                                    <p>Resources</p>
                                    <li>FAQs</li>
                                    <li>Contact Us</li>
                                    <li>KFC App</li>
                                </ul>
                            </div>
                            <div className={styles.cards44}>
                                <ul>
                                    <p>Find a KFC</p>
                                    <li>Find a KFC</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.lastbox44}>
                        <div className={styles.section44}>
                            <div className={styles.lastLinefoot}>
                                <p>Privacy Policy |</p>
                            </div>
                            <div className={styles.lastLinefoot}>
                                <p>Updated 01/2022 |</p>
                            </div>
                            <div className={styles.lastLinefoot}>
                                <p>Terms Of Use |</p>
                            </div>
                            <div className={styles.lastLinefoot}>
                                <p>Our Cookies & Ads |</p>
                            </div>
                            <div className={styles.lastLinefoot}>
                                <p>Do Not Sell My Personal Information</p>
                            </div>
                        </div>
                        <div className={styles.lastLinefoot}>
                            <p>Copyright © KFC Corporation 2022 All Rights Reserved</p>
                        </div>
                        <div style={{ display: "flex" }} className={styles.lastLinefoot}>
                            <Link to={"https://www.instagram.com"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={instagram} alt="" /></Link>
                            <Link to={"https://www.facebook.com"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={facebook} alt="" /></Link>
                            <Link to={"https://www.linkedin.com"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={twitter} alt="" /></Link>
                        </div>
                    </div>
                    <div style={{ borderLeft: "gray" }} className={styles.lastLinefoot}>
                        <p> Asessibility Statement</p>
                    </div>
                </div>
                <div style={{ display: "flex" }} className={styles.lastLinefootsvg}>
                    <Link to={"https://www.instagram.com"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={instagram} alt="" /></Link>
                    <Link to={"https://www.facebook.com"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={facebook} alt="" /></Link>
                    <Link to={"https://www.linkedin.com"}><img height={"30rem"} style={{ padding: "0.3vw 1vw" }} src={twitter} alt="" /></Link>
                </div>
            </div>
    )
}

