import * as yup from "yup";

const schema = yup.object({
	email: yup.string().required("Email account is required").email("Email account is not valid"),
	password: yup.string().required("Password is required"),
});

export default schema;
