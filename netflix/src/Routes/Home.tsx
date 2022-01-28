import { useQuery } from 'react-query'
import { getMovies , IGetMoviesResult } from '../api'
import styled from 'styled-components'



const Wrapper = styled.div`
    background: black;
`

const Loader = styled.div`
    height: 20vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Banner = styled.div`
`


function Home() 
{ 
  const {data , isLoading} = useQuery<IGetMoviesResult>(['movies', 'nowPlaying'], getMovies)
  
  return(
    <Wrapper>
        {isLoading ? (<Loader>Loading...</Loader>
        ):(
        <>
        <Banner>
            
        </Banner>
        </>
        )}
    </Wrapper>
  )
}

export default Home
