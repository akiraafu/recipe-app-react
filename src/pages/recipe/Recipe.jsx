// import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

//style
import "./recipe.css";

const Recipe = () => {
  const { id } = useParams();
  // const url = "http://localhost:3000/recipes/" + id;
  // const { data: recipe, isPending, error } = useFetch(url);
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that recipe");
        }
      });
  }, [id]);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <p className="loading">Loading</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p className="">Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>

          <p className="">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
