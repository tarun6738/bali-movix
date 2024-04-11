/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const TMDB_API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;

const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(
        `/${mediaType}/${id}/recommendations?api_key=${TMDB_API_KEY}`
    );

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;