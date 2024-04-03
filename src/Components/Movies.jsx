import MovieList from "./MovieList"
// import disneylady from "../assets"

const Movies =()=>{


    const cartInfo = [

        {img: "./assets/disneylady.png", title: "Disney lady"},
        
    ]
    return(

        <>
            <MovieList band = {cartInfo}/>
        
        </>
    )
}
export default Movies