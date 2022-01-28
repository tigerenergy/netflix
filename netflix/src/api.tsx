const API_KEY ='9b9ee71ca5b5290f2661c8fbaa0d6f26'
const BASE_PATH = 'https://api.themoviedb.org/3'


export interface IMovie
{   
    id: number
    backdrop_path: string
    poster_path: string
    title: string
    overview: string
}


export interface IGetMoviesResult
{
    dates:
    {
        maximum: string
        minimum: string

    },
    page: number
    results: []
    total_pages: number
    total_results: number
}


export function getMovies()
{
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`)
    .then((response) => response.json()
    )
}