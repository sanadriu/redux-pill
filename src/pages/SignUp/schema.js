import * as yup from "yup";
import validator from "validator";

const schema = yup.object({
	name: yup.string().required("User name is required").max(64, "Maximum length is 64 characters"),
	email: yup.string().required("Email account is required").email("Email account is not valid"),
	password: yup
		.string()
		.required("Password is required")
		.test("test-password-strength", "Password is not strong enough", function (value) {
			return typeof value === "string" && validator.isStrongPassword(value);
		}),
	passwordConfirm: yup
		.string()
		.required("Password confirmation is required")
		.test("test-password-confirm", "Password confirmation does not match", function (value) {
			return this.parent.password === value;
		}),
});

export default schema;
