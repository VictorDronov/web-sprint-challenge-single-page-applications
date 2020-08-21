import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2,'name must be at least 2 characters long')
    .required("Must include order name."),
    instructions: yup
    .string()
    .max(20,"can not exceed 20 characters"),
  size: yup.string().required("Must choose a size."),
  toppings: yup.boolean().oneOf([true], "Can not choose more than 4 topings"),
  sauce: yup.string().required("choose a sauce")
});

export default formSchema;
