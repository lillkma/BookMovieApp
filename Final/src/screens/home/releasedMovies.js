import React, { useEffect, useState } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


 
const ReleasedMovies = function() {
useEffect(() =>{
   fetchMovies();

},[]);
const [items,setItems] = useState([]);
const fetchMovies = async()=>{
  const data = await(fetch('http://localhost:8085/api/v1/movies?page=1&limit=10&status=RELEASED'));
const items = await data.json();
console.log(items.movies);
setItems(items.movies);

};
   
  return (
    <div className="main">
      <GridList className="gridlist" cols={4.8}>
        {items.map(item => (
          <GridListTile key={item.id}>
            <img src={item.poster_url} alt={item.title} />
            <GridListTileBar
              title={item.title}
            
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className="icon" />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default ReleasedMovies;
