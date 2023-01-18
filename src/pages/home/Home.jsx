import { useFetch } from "../../hooks/useFetch";
//style
import "./home.css";

//components
import RecipeList from "../../components/RecipeList";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}{" "}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
