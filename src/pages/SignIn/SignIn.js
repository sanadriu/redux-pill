import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import InputButton from "../../components/InputButton";
import InputField from "../../components/InputField";
import { sendLoginRequest } from "../../redux/auth/actions";
import validationSchema from "./schema";

const initialValues = {
	email: "",
	password: "",
};

export default function SignIn() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values, actions) => {
			const { setSubmitting } = actions;

			setSubmitting(true);

			dispatch(sendLoginRequest({ params: values }));
		},
	});

	const { values, errors, touched, isValidating, isSubmitting, isValid, handleSubmit, handleBlur, handleChange } =
		formik;

	return (
		<div className="flex flex-col h-screen">
			<Header />
			<main className="flex justify-center items-center flex-grow">
				<form className="p-4 shadow-md" onSubmit={handleSubmit}>
					<label htmlFor="email">Email account</label>
					<InputField
						type="text"
						name="email"
						value={values.email}
						isInvalid={touched.email && errors.email}
						placeholder="Enter password..."
						className="mb-3"
					/>
					<label htmlFor="password">Password</label>
					<InputField
						type="password"
						name="password"
						value={values.password}
						isInvalid={touched.password && errors.password}
						placeholder="Enter password..."
						className="mb-3"
					/>
					<InputButton type="submit">Login</InputButton>
				</form>
			</main>
		</div>
	);
}
