import * as yup from 'yup'

const formSchema = yup.object().shape({
    name:yup
    .string()
    .trim()
    .required("Name is Required")
    .min(2, "Name must be at least 2 characters"),
    special:yup
    .string()
})

export default formSchema;