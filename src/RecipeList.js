import { useEffect, useState } from 'react';
import {RecipeCard} from "./RecipeCard"

export function RecipeList(params) {

  const [data, setdata] = useState([]);
  useEffect(() => {
    async function getRecipes() {
      const d = await fetch("https://node-movies-app.herokuapp.com/recipes");
      const result = await d.json();
      console.log(result);
      setdata(result);
      // console.log("data:", data);
    }

    getRecipes();

  }, []);

  return (
    <div className="recipe-list-container">
      {data.map(({name,pic,_id}, index) => (
          <RecipeCard key={_id} name={name} pic={pic} _id={_id} />
      ))}
        
    </div>
  );

}

