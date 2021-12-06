import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';

export function Show() {
    const{id}=useParams();
    const history=useHistory();

    const [recipe,setrecipe]=useState({});

    useEffect(()=>{
      async function get(){
          const data= await fetch(`https://node-movies-app.herokuapp.com/recipes/${id}`);
          const rcp=await data.json();
          setrecipe(rcp);
      } 
      get(); 
    },[])
    return(
        <div className="show">
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={recipe.pic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
        onClick={()=>history.goBack()}
        size="small" color="primary">
          Back
        </Button>
      </CardActions>
    </Card>

        </div>
    )
}
