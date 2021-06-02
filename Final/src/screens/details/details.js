import Header from '../../common/header/header';
import React, { useState } from "react";
import "./details.css";
import { Link,Typography } from '@material-ui/core';
import image1 from '../../assets/flower1.jpg';
import image2 from '../../assets/flower2.jpeg';
const Details = function () {
    const tileData = [
        {
           poster_url: image1,
           title:'Inception',
           genres: 'Action, Adventure,Sci-Fi',
           duration: '148',
           release_date:'Fri Jul 16 2021',
           critics_rating: '8.8',
           wiki_url:"https:google.com",
           story_line: "A test that is not yet proven",
           trailer_url:"",
           artists:"Leonardo Davinshi"
      }
     
     ];
  return (
    <div>
           <div><Header operation="BookShow"/></div>
            <div className='flexcontainer'>
                <div className = "child1">
                <Typography className="BackLink">                  
                    <Link href="#" color="inherit">
                        { "< Back To Home"}
                    </Link>                   
                </Typography>
                {tileData.map((tile) =>(
                    <img src={tile.poster_url} alt={tile.title} className="moviePoster" />
                    ))}
                </div>
                
                {tileData.map((tile) =>(
                <div className = "child2">
                    <h2>
                        {tile.title}
                    </h2>
                    <div>
                    <label >
                    <strong>Genre: </strong>
                    {tile.genres}
                    </label>
                    </div>
                    <div>
                    <label >
                    <strong>Duration: </strong>
                    {tile.duration}
                    </label>
                    </div>
                    <div>
                    <label >
                    <strong>Release Date: </strong>
                    {tile.release_date}
                    </label>
                    </div>

                    <div>
                    <label >
                    <strong>Rating: </strong>
                    {tile.critics_rating}
                    </label>
                    </div>
                    <br/>
                    

                    <div>
                    <label >
                    <strong>Plot: </strong>
                    {tile.story_line}
                    </label>
                    </div>
                    <br/>
                    <div>
                    <label >
                    <strong>Trailer: </strong>
                    
                    </label>
                    </div>
                </div>
                ))}
                {tileData.map((tile) =>(
                <div className = "child3">
                    <div>
                    <label >
                    <strong>Rate this movie: </strong>                    
                    </label>
                    </div>
                    <br/>
                    <div>
                    <label >
                    <strong>Artists: </strong>                    
                    </label>
                    </div>
                </div>
                ))}
                </div>
               
            <div>
            
            </div>
       </div>
  )}
  export default Details;