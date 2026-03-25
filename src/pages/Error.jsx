import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
	const error = useRouteError();
	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={img} alt="" />
					<h3>Ohh!</h3>
					<p>It looks like there is some error</p>
					<Link to="/">Back Home</Link>
				</div>
			</Wrapper>
		);
	}
	return (
		<div>
			<h3>Something went wrong</h3>
		</div>
	);
};
export default Error;
