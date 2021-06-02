import React from 'react';
import "./home.css";
import Header from '../../common/header/header'
import UpcomingMovies from './upComingMovies'
import ReleasedMovies from './releasedMovies'
import FindMoviesBy from './findMoviesBy'
const Home = function(props) {
   return (
       <div>
           <div><Header operation={props.operation}/></div>
           <div className="upcomingMovies">
                Upcoming Movies         
            </div>
            <div>
                <UpcomingMovies/>
            </div>
            <div className='flexcontainer'>
                <div className = "child1"><ReleasedMovies/></div>
                <div className = "child2"><FindMoviesBy/></div>
            </div>
            <div>
                
            </div>
       </div>

       
   )
}

export default Home;