import { useHistory, useParams } from "react-router";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function Delete() {
    const{id}=useParams();
    const history=useHistory();

    async function deleted(params) {
        const data=await fetch(`https://node-movies-app.herokuapp.com/recipes/${id}`,
        {method:"DELETE"}
        );
        console.log(data);
        history.push("/recipes")
    }
    return(
      <div className="delete">
          <CardContent>
             <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Are you sure you want to delete
             </Typography>
             <Button
             onClick={deleted}
              size="small">Yes</Button>
             <Button 
             onClick={()=>history.goBack()}
             size="small">Back</Button>
    </CardContent>

      </div>
    )
 
}
