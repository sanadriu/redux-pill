import * as yup from "yup";

const schema = yup.object({
	email: yup.string().required("Email account is required").email("Email account is not valid"),
});

export default schema;
