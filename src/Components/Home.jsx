import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AccordionPage from "./AccordionPage";
import GoogleReviews from "../Components/GoogleReviews";
import Sliderimage1 from "../images/Mslider3.png";
import Sliderimage2 from "../images/Mslider4.png";

import "../App.css";
import "../css/home.css";

import HomeCards from "../Components/HomeCards";
import HomeTexts from "../Components/HomeTexts";


function Home() {



    const Slider = SliderImport.default ?? SliderImport;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
    };




    return (
        <main>

            {/* SLIDER */}
            <section
                className="slider-container"
                aria-label="Muharrem Arslan Evden Eve Taşımacılık"
            >

                <Slider {...settings}>

                    <div>
                        <img
                            className="slider-image"
                            src={Sliderimage1}
                            alt="Muharrem Arslan Evden Eve Taşımacılık - Evden Eve Nakliyat"
                        />
                    </div>

                    <div>
                        <img
                            className="slider-image"
                            src={Sliderimage2}
                            alt="Muharrem Arslan Evden Eve Taşımacılık - Şehirler Arası Nakliyat"
                        />
                    </div>

                </Slider>

            </section>


            {/* ANA BAŞLIK */}
            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >

                <h1 className="HomepageTitle">
                    Muharrem Arslan Evden Eve Taşımacılık
                </h1>

                <hr className="HomeHr" />

            </section>


            {/* HİZMETLER */}
            <section
                className="homeCard"
                aria-label="Nakliyat Hizmetlerimiz"
            >
                <HomeCards />
            </section>


            {/* HAKKIMIZDA / TANITIM */}
            <section>
                <HomeTexts />
            </section>


            <GoogleReviews />


            {/* SIKÇA SORULAN SORULAR */}
            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >

                <h2 className="HomepageTitle">
                    Sıkça Sorulan Sorular
                </h2>

                <hr className="HomeHr" />

                <AccordionPage />

            </section>

        </main>
    );
}


export default Home;