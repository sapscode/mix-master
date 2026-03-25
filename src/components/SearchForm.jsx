import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

const SearchForm = ({ searchTerm }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	return (
		<Wrapper>
			<Form className="form">
				<input
					className="form-input"
					type="search"
					name="search"
					defaultValue={searchTerm}
				/>
				<button className="btn" type="submit" disabled={isSubmitting}>
					{isSubmitting ? "submitting..." : "submit"}
				</button>
			</Form>
		</Wrapper>
	);
};
export default SearchForm;
