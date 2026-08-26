import React, { useEffect, useState } from "react";
import SliderImport from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../css/googleReviews.css";


function GoogleReviews() {

    const [reviews, setReviews] = useState([]);
    const [businessInfo, setBusinessInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");


    useEffect(() => {

        const getReviews = async () => {

            try {

                const response = await fetch(
                    "http://localhost:5000/api/reviews"
                );

                const data = await response.json();

                if (!data.success) {
                    throw new Error(data.message);
                }

                setReviews(data.data.reviews || []);
                setBusinessInfo(data.data);

            } catch (error) {

                console.error(
                    "Google yorumları alınamadı:",
                    error
                );

                setError(
                    "Google yorumları şu anda alınamıyor."
                );

            } finally {

                setLoading(false);

            }

        };


        getReviews();

    }, []);


    const Slider = SliderImport.default ?? SliderImport;


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };


    if (loading) {

        return (
            <section className="GoogleReviewsSection">

                <div className="GoogleReviewsHeader">

                    <h2 className="GoogleReviewsTitle">
                        Müşterilerimiz Ne Diyor?
                    </h2>

                    <p className="GoogleReviewsSubtitle">
                        Google yorumları yükleniyor...
                    </p>

                </div>

            </section>
        );

    }


    if (error) {

        return (
            <section className="GoogleReviewsSection">

                <div className="GoogleReviewsHeader">

                    <h2 className="GoogleReviewsTitle">
                        Müşterilerimiz Ne Diyor?
                    </h2>

                    <p className="GoogleReviewsSubtitle">
                        {error}
                    </p>

                </div>

            </section>
        );

    }


    return (

        <section
            className="GoogleReviewsSection"
            aria-label="Google müşteri yorumları"
        >

            {/* BAŞLIK */}

            <div className="GoogleReviewsHeader">

                <h2 className="GoogleReviewsTitle">
                    Müşterilerimiz Ne Diyor?
                </h2>

                <p className="GoogleReviewsSubtitle">
                    Google'da bizi değerlendiren müşterilerimizin yorumları
                </p>


                <div className="GoogleReviewsRating">

                    <span className="GoogleReviewsRatingNumber">
                        {businessInfo?.rating || 0}
                    </span>

                    <span className="GoogleReviewsStars">
                        {"★".repeat(
                            Math.round(businessInfo?.rating || 0)
                        )}
                        {"☆".repeat(
                            5 - Math.round(businessInfo?.rating || 0)
                        )}
                    </span>

                    <span className="GoogleReviewsGoogleText">
                        Google Yorumları
                    </span>

                </div>

            </div>


            {/* YORUMLAR */}

            <div className="GoogleReviewsSlider">

                <Slider {...settings}>

                    {reviews.map((review, index) => (

                        <div
                            className="GoogleReviewCardWrapper"
                            key={index}
                        >

                            <article className="GoogleReviewCard">

                                <div className="GoogleReviewTop">

                                    <div>

                                        <h3 className="GoogleReviewName">
                                            {review.name}
                                        </h3>

                                        <p className="GoogleReviewDate">
                                            {review.date}
                                        </p>

                                    </div>

                                </div>


                                <div className="GoogleReviewRating">

                                    {"★".repeat(review.rating)}

                                    {"☆".repeat(5 - review.rating)}

                                </div>


                                <p className="GoogleReviewText">
                                    {review.message}
                                </p>

                            </article>

                        </div>

                    ))}

                </Slider>

            </div>


            {/* GOOGLE BUTONU */}

            {businessInfo?.googleUrl && (

                <div className="GoogleReviewsButtonWrapper">

                    <a
                        href={businessInfo.googleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="GoogleReviewsButton"
                    >
                        Google'da Tüm Yorumları Gör
                    </a>

                </div>

            )}

        </section>

    );
}


export default GoogleReviews;