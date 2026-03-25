import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

const cocktailSearchUrl =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
	const url = new URL(request.url);
	const searchTerm = url.searchParams.get("search") || "beer";
	try {
		const res = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
		return { drinks: res.data.drinks, searchTerm };
	} catch (err) {
		throw new Error(err);
	}
};

const Landing = () => {
	const { drinks, searchTerm } = useLoaderData();
	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CocktailList drinks={drinks} />
		</>
	);
};
export default Landing;
