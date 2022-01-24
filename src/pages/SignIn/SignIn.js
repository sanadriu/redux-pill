import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import InputButton from "../../components/InputButton";
import InputField from "../../components/InputField";
import { clearAuthError, sendLoginRequest } from "../../redux/auth/actions";
import validationSchema from "./schema";

const initialValues = {
	email: "",
	password: "",
};

export default function SignIn() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (auth.user) navigate("/home", { replace: true });
	});

	useEffect(() => {
		return () => dispatch(clearAuthError());
	}, [dispatch]);

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values, actions) => {
			const { setSubmitting } = actions;

			setSubmitting(true);

			dispatch(sendLoginRequest({ params: values })).finally(() => setSubmitting(false));
		},
	});

	const { values, errors, touched, isValidating, isSubmitting, isValid, handleSubmit, handleBlur, handleChange } =
		formik;

	return (
		<div className="flex flex-col h-screen">
			<Header />
			<main className="flex flex-col justify-center items-center gap-4 flex-grow p-4">
				{auth.error && (
					<div className="container max-w-lg p-3 rounded-md shadow-md bg-red-500 text-white text-center">
						{auth.error.message}
					</div>
				)}
				<form
					className="container max-w-lg p-8 flex flex-col items-center rounded-md shadow-md border border-gray-100"
					onSubmit={handleSubmit}
				>
					<h1 className="text-center text-3xl font-light mb-4">Login</h1>
					<div className="mb-4 w-full">
						<label className="block mb-2 font-light" htmlFor="email">
							Email account
						</label>
						<InputField
							type="text"
							name="email"
							placeholder="Enter email..."
							feedbackMessage={errors.email}
							value={values.email}
							isInvalid={touched.email && errors.email}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-8 w-full">
						<label className="block mb-2 font-light" htmlFor="password">
							Password
						</label>
						<InputField
							type="password"
							name="password"
							placeholder="Enter password..."
							feedbackMessage={errors.password}
							value={values.password}
							isInvalid={touched.password && errors.password}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
					</div>
					<InputButton type="submit" size="lg" isDisabled={!isValid || isValidating || isSubmitting}>
						Sign In
					</InputButton>
				</form>
				<div>
					<span>Don't you have an account? </span>
					<Link to="/register" className="text-decoration-none text-blue-500 hover:text-blue-700">
						Sign Up
					</Link>
				</div>
			</main>
		</div>
	);
}
