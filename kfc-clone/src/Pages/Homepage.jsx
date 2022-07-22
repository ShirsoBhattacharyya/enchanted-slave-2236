import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRight } from "react-icons/bs";
import styles from './Homepage.module.css';

const mainSlider = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
};
export const Home=()=>{
    const sliderVid = React.useRef();
    return(
    <div>
        <div>
            <div className={styles.jumboSlider}>
                <Slider {...mainSlider} className={styles.slider}>
                    <div>
                        <div className={styles.overlayContent}>
                            <p>THEY'RE BACK!</p>
                            <h2>$5 MAC &amp; CHEESE BOWLS</h2>
                            <p>
                            Your favorite cheesy side-turned-main-dish is finally back! Get your hands on a tasty Mac & Cheese bowl for $5 today
                            </p>
                            <a href="/">
                            <span style={{ color: "white",display:"flex",alignItems:"center"}}>
                                <span>Get the Meal</span>
                                <BsArrowRight style={{ transform: "scale(1.1)" }} />
                            </span>
                            </a>
                        </div>
                        <img
                            src="https://images.ctfassets.net/9tka4b3550oc/6tpG1VeOvzeMZI6Gyw7eaK/44e4b22d5445776c149c896ba7192705/Property_1_V1__6_.jpg?q=75&w=1680"
                            alt=""
                        />
                        <div className={styles.orderingInfo}>
                            <p>
                            Prices and participation may vary, for a limited time only.  Offer not available on third party ordering websites/apps. <br/> Tax extra
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoGradient}>
                        <div className={styles.overlay}></div>
                        <div className={styles.overlayContent} style={{color:"black"}}>
                            <p>LIMITED TIME OFFER</p>
                            <h2>FREE BEVERAGE BUCKET</h2>
                            <p>
                            12 pieces of our freshly prepared World Famous Chicken, 3 large sides of your choice, and 6 biscuits. Now includes a FREE Beverage Bucket for a limited time only!
                            </p>
                            <a href="/">
                                <span style={{ color: "black",display:"flex",alignItems:"center"}}>
                                    <span>Order Now</span>
                                    <BsArrowRight />
                                </span>
                            </a>
                        </div>
                        <img
                            src="https://images.ctfassets.net/9tka4b3550oc/6VaUcScpgJm3yfOJoeTrsu/c4c48bcc8abdde75503a86659eb0a017/FreeBeverageBucket_Desktop_Home_Hero_1440x640_V1.jpg?q=75&w=1680"
                            alt=""
                        />
                        <div className={styles.orderingInfo}>
                            <p
                            style={{ color: "white", position: "relative", zIndex: 2000 }}
                            >
                            Offer valid through 9/11/22 at participating KFC locations with purchase of 12 pc and 16 pc meals, while supplies late. Not available through third party websites/apps. Prices and participation may vary. Customer responsible for all applicable taxes and fees. Cannot be combined with other offers.
                            </p>
                        </div>
                    </div>
                    <div className={styles.infoGradient}>
                        <div className={styles.overlay}></div>
                        <div className={styles.overlayContent} style={{color:"black"}}>
                            <p>FREE DELIVERY TILL 7.24!</p>
                            <h2>YOUR FAVORITES—DELIVERED FREE!</h2>
                            <p>
                            What are you waitin’ for?! Get free delivery on all your fried favorites when you order on the KFC app or KFC.com.
                            </p>
                            <a href="/">
                                <span style={{ color: "black",display:"flex",alignItems:"center"}}>
                                    <span>Order Now</span>
                                    <BsArrowRight />
                                </span>
                            </a>
                        </div>
                        <img
                            src="https://images.ctfassets.net/9tka4b3550oc/2MirqOJCIHWcjPioMJRq96/e4fb4e78ec27728cc00cbd611c031e20/Property_1_V2.jpg?q=75&w=1680"
                            alt=""
                        />
                        <div className={styles.orderingInfo}>
                            <p
                            style={{ color: "white", position: "relative", zIndex: 2000 }}
                            >
                            Free delivery available only on KFC app and kfc.com at participating locations from 7/4-7/24. Delivery availability and hours may vary. Not available for orders placed on third-party delivery platforms. Taxes and fees apply. Gratuity extra. See KFC App for more details.
                            </p>
                        </div>
                    </div>
                    <div>
                    <div className={styles.overlayContent} style={{ color: "black" }}>
                        <p>THE NEW KFC APP IS HERE</p>
                        <h2>HOME COOKIN' HAS A NEW HOME</h2>
                        <a href="/">
                        <span style={{ color: "black",display:"flex",alignItems:"center"}}>
                            <span>Download</span>
                            <BsArrowRight />
                        </span>
                        </a>
                    </div>
                    <video
                        src="https://videos.ctfassets.net/9tka4b3550oc/3eVt04hBZVfN6MVMzEv4Rt/26a3f084c23ab3484870f7d544550853/1920x1080_KFC_App-Hero-Asset_05.mp4?q=75&amp;w=100vw"
                        width="100%"
                        height="700px"
                        ref={sliderVid}
                        loop
                        autoPlay
                        muted
                    >
                        <source
                        type="video/mp4"
                        src="https://videos.ctfassets.net/9tka4b3550oc/3eVt04hBZVfN6MVMzEv4Rt/26a3f084c23ab3484870f7d544550853/1920x1080_KFC_App-Hero-Asset_05.mp4?q=75&amp;w=1680"
                        />
                    </video>
                    </div>
                </Slider>
            </div>
        </div>
        <div className={styles.ctaPampletContainer}>
          <div className={styles.ctaPamplet}>
            <h3>FINGER LICKIN' GOOD® IS NOW JUST A FEW CLICKS AWAY</h3>
            <button>Start Order</button>
          </div>
        </div>  
    </div>
    )
}