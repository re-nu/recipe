import { useEffect, useState } from 'react';
import { Link,Switch,Route } from 'react-router-dom';
import { AddRecipe } from './AddRecipe';
import './App.css';
import { Delete } from './Delete';
import { RecipeList } from './RecipeList';
import { Show } from './Show';
import {Edit } from './Edit';


function App() {
  // const reciepes=[
  //   {name:"Biryani",
  //    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWMpeGxyNE1jVjX1UfyOBspCrcSvDu0bq4Q&usqp=CAU"
  //  },
  //   {name:"Pareen Masala",
  //    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06llP9dJomDH55rwKiJT6DMMfeJ2SzWScNA&usqp=CAU"
  //  },
  //   {name:"Tandoori",
  //    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE20sYnAOsX0aczYC2eGGslSALVodro5U46w&usqp=CAU"
  //  },
  //   {name:"Parotha shwarma",
  //    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8qXYFXuPE6ccSW_nRjl3HMj4YNqR1PyDeQ&usqp=CAU"
  //  },
  //   {name:"Gobi monchurian",
  //    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_PTT8ughHlFC44SSdPXeKb--jOoop4dXkA&usqp=CAU"
  //  }
  // ];

  const [data,setdata]=useState([]);

  useEffect(()=>{
    async function getRecipes() {
      const d = await fetch("https://node-movies-app.herokuapp.com/recipes");
      const result = await d.json();
      console.log(result);
      setdata(result)
      console.log("data:",data);
    } 

    getRecipes();

  },[]);
  
   

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/recipes">recipes</Link>
        </li>
        <li>
          <Link to="/add-recipes">add recipes</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">welcome to home</Route>
        <Route exact path="/recipes"><RecipeList/></Route>
        <Route exact path="/add-recipes"><AddRecipe/></Route>
        <Route exact path="/recipes/:id">show <Show/></Route>
        <Route exact path="/delete/:id">delete <Delete /></Route>
        <Route exact path="/edit/:id">edit <Edit/></Route>
      </Switch>
    </div>
  );
}

export default App;
