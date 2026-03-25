import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const singleCocktailUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
	const { id } = params;
	try {
		const { data } = await axios.get(`${singleCocktailUrl}${id}`);
		return { id, data };
	} catch (err) {
		throw new Error(err);
	}
};

const Cocktail = () => {
	const { id, data } = useLoaderData();

	if (!data) {
		toast("Something went wrong, redirecting to home...");
		return <Navigate to="/" />;
	}

	const singleDrink = data.drinks[0];
	const {
		strDrink: name,
		strDrinkThumb: image,
		strAlcoholic: info,
		strCategory: category,
		strGlass: glass,
		strInstructions: instructions
	} = singleDrink;

	const ingredients = Object.keys(singleDrink).reduce((acc, key) => {
		if (key.startsWith("strIngredient") && !!singleDrink[key])
			acc.push(singleDrink[key]);

		return acc;
	}, []);

	return (
		<Wrapper>
			<header>
				<Link to="/" className="btn">
					back home
				</Link>
				<h3>{name}</h3>
			</header>
			<div className="drink">
				<img src={image} alt={name} className="img"></img>
				<div className="drink-info">
					<p>
						<span className="drink-data">name :</span> {name}
					</p>
					<p>
						<span className="drink-data">category :</span> {category}
					</p>
					<p>
						<span className="drink-data">info :</span> {info}
					</p>
					<p>
						<span className="drink-data">glass :</span> {glass}
					</p>
					<p>
						<span className="drink-data">ingredients :</span>
						{ingredients.join(", ")}
					</p>
					<p>
						<span className="drink-data">instructions :</span> {instructions}
					</p>
				</div>
			</div>
		</Wrapper>
	);
};
export default Cocktail;
