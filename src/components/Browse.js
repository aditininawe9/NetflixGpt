import Header from './Header'
import MainContainer from './MainContainer';
import useNowPlayingMovies from './hooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingMovies();
  // MainContaier
  //  -Video Background
  //  -Video Title
  // Secondary Container 
  //  -MovieList * n
  //     - cards * n
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  )
}

export default Browse
