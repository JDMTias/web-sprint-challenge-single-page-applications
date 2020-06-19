import * as yup from 'yup'

const formSchema = yup.object().shape({
    name:yup
    .string()
    .required("Name is Required")
    .min(2, "Name must be at least 2 characters"),
    special:yup
    .string(),
    size:yup
    .string()
})

export default formSchema;