import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	HomeLayout,
	About,
	Landing,
	Error,
	Newsletter,
	Cocktail,
	SinglePageError
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

import { action as newsLetterAction } from "./pages/Newsletter";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <HomeLayout />,
			errorElement: <Error />,
			children: [
				{
					index: true,
					element: <Landing />,
					loader: landingLoader,
					errorElement: <SinglePageError />
				},
				{
					path: "about",
					element: <About />
				},
				{
					path: "newsletter",
					element: <Newsletter />,
					action: newsLetterAction
				},
				{
					path: "cocktail/:id",
					errorElement: <SinglePageError />,
					loader: singleCocktailLoader,
					element: <Cocktail />
				}
			]
		}
	],
	{
		basename: "/mix-master"
	}
);
const App = () => {
	return <RouterProvider router={router}></RouterProvider>;
};
export default App;
