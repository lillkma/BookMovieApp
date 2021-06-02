import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import  "./findMoviesBy.css";
import { Grid } from '@material-ui/core';

const FindMoviesBy = function() {

  const bull = <span className="bullet">•</span>;
  const handleChange = (event) => {
    const name = event.target.name;
    
  };
  return (
    <form>
    <Grid container>
      <Grid item>
    <Card className="root" variant="outlined" display = "block" >

     
      <CardActions>  
     
      <FormControl >
      <h5 class = "heading" color ="textPrimary">FIND MOVIES BY:</h5>
      </FormControl >   
     
    
        <FormControl>
          <span>
          <TextField id="standard-basic" label="Movie Name" />  
          </span>
        </FormControl>
   
 
      <Typography >
      <FormControl className="formControl">
        <InputLabel htmlFor="age-native-simple" className = "select">Genres</InputLabel>
        <Select
          native
          value=""
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Thriller</option>
          <option value={20}>Romantic</option>
          <option value={30}>Comedy</option>
        </Select>
      </FormControl>
      </Typography>   
      
  
      <Typography >
      <FormControl className="formControl">
        <InputLabel htmlFor="age-native-simple" className = "select">Artists</InputLabel>
        <Select
          native
          value=""
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>hero</option>
          <option value={20}>hroin</option>
          <option value={30}>villan</option>
        </Select>
      </FormControl>
      </Typography>

      <TextField
        id="date"
        label="Release Date Start"
        type="date"
        defaultValue="dd-mm-yyyy"
        className="textField"
        InputLabelProps={{
          shrink: true,
        }}
      />

<TextField
        id="date"
        label="Release Date End"
        type="date"
        defaultValue="dd-mm-yyyy"
        className="textField"
        InputLabelProps={{
          shrink: true,
        }}
      />

    <Button variant="contained" color="primary">
      Apply
    </Button>
    
      </CardActions>
      
    </Card>
    </Grid>
    </Grid>
    </form>
  );
}
export default FindMoviesBy;
