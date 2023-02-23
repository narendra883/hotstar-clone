import React from "react";
const PlayListCOntext = React.createContext({
    movies:[],
    addMovies:(movies)=>{},
    removeMovies:(id)=>{}
});

export default PlayListCOntext;