import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from 'react-router';


export function RecipeCard({ name, pic, _id }) {
    const history=useHistory();
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={pic}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button 
            onClick={()=>history.push("/recipes/"+_id)}
            size="small" color="primary">
              Show
            </Button>
            <Button
            onClick={()=>history.push("/edit/"+_id)}
             size="small" color="primary">
              edit
            </Button>
            <Button 
            onClick={()=>history.push("/delete/"+_id)}
            size="small" color="primary">
              delete
            </Button>
          </CardActions>
        </Card>
      );
}
