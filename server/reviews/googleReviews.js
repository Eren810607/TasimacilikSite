const axios = require("axios");

const getGoogleReviews = async () => {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        throw new Error("Google API bilgileri .env dosyasında eksik.");
    }

    const url = "https://maps.googleapis.com/maps/api/place/details/json";

    const response = await axios.get(url, {
        params: {
            place_id: placeId,
            fields: "name,rating,user_ratings_total,reviews,url",
            key: apiKey,
            language: "tr"
        }
    });

    const result = response.data.result;

    if (!result) {
        throw new Error("Google işletme bilgileri bulunamadı.");
    }

    const reviews = (result.reviews || [])
        .filter((review) => review.rating >= 3)
        .map((review) => ({
            name: review.author_name,
            rating: review.rating,
            message: review.text,
            date: review.relative_time_description,
            profilePhoto: review.profile_photo_url || null
        }));

    return {
        businessName: result.name,
        rating: result.rating || 0,
        totalRatings: result.user_ratings_total || 0,
        googleUrl: result.url || "",
        reviews
    };
};

module.exports = {
    getGoogleReviews
};