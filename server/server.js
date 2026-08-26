const express = require("express");
const cors = require("cors");
const NodeCache = require("node-cache");

require("dotenv").config();

const { getGoogleReviews } = require("./reviews/googleReviews");

const app = express();

app.use(cors());
app.use(express.json());



const reviewsCache = new NodeCache({
    stdTTL: 21600,
    checkperiod: 300
});



app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Muharrem Arslan API çalışıyor."
    });

});




app.get("/api/reviews", async (req, res) => {

    try {



        const cachedReviews = reviewsCache.get("googleReviews");

        if (cachedReviews) {

            console.log("Google yorumları cache'den gönderildi.");

            return res.json({
                success: true,
                source: "cache",
                data: cachedReviews
            });

        }




        console.log("Google API'den yorumlar alınıyor...");

        const data = await getGoogleReviews();



        reviewsCache.set(
            "googleReviews",
            data
        );


        res.json({
            success: true,
            source: "google",
            data: data
        });


    } catch (error) {

        console.error(
            "Google Reviews API Hatası:",
            error.message
        );


        res.status(500).json({

            success: false,

            message:
                "Google yorumları alınamadı."

        });

    }

});


const PORT = 5000;


app.listen(PORT, () => {

    console.log(
        `Server çalışıyor: http://localhost:${PORT}`
    );

});