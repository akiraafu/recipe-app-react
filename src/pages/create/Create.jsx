import { useRef, useState } from "react";
// import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

//styles
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();

  // const { postData, data, error } = useFetch(
  //   "http://localhost:3000/recipes",
  //   "POST"
  // );

  const handleSubmit = async (e) => {
    e.preventDefault();
    // postData({
    //   title,
    //   ingredients,
    //   method,
    //   cookingTime: cookingTime + "minutes",
    // });
    const doc = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + "minutes",
    };
    try {
      await projectFirestore.collection("recipes").add(doc);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  // //redirect the user when we get data response
  // useEffect(() => {
  //   if (data) {
  //     setTimeout(() => {
  //       history.push("/");
  //     }, 500);
  //   }
  // }, [data, history]);

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Ttile: </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i},</em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Create;
