import PlayListCOntext from "./PlayList-context";
import { useReducer } from "react";

const defaultplayState = {
    movies:[],
};
const playReducer = (state,action)=>{
    if (action.type === "ADD"){
        let updatedMovies;
        if (state.movies.length>0){
            console.log(state.movies.length)
            state.movies.pop()
            updatedMovies = state.movies.concat(action.movies);
        }
        else{
            console.log("not existed")
            updatedMovies = state.movies.concat(action.movies);
        }
        return{
            movies:updatedMovies,
        };
    }
    if (action.type === 'REMOVE'){
        const updatedMovies = state.movies.filter(movie=>movie.id!==action.id);
        console.log(action.id)
        console.log("hello")
        return{
            movies:updatedMovies
        }
    }
    return defaultplayState;
};

const PlayListProvider = (props) =>{
    const [playState,dispatchplayAction] = useReducer(
        playReducer,
        defaultplayState
    );
    const movieAddHandler = (movies) =>{
        dispatchplayAction({type:"ADD",movies:movies});
    };
    const movieRemoveHandler = (id) =>{
        dispatchplayAction({type:"REMOVE" ,id:id});
    }
    const playListContext = {
        movies:playState.movies,
        addmovies:movieAddHandler,
        removemovies:movieRemoveHandler,
    };
    return(
        <PlayListCOntext.Provider value={playListContext}>{props.children}</PlayListCOntext.Provider>
    );
};

export default PlayListProvider;