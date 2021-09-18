import TextInputBEM from "ps-react/TextInputBEM";

/** With Error Text */
function ExampleOptional() {
    return (
        <TextInputBEM
            htmlId="example optional"
            label="First Name"
            name="firstName"
            required
            error="First name is required"
            onChange={() => { }}
        />
    )
}

//Exercise SelectInput CheckboxList .... yapılacak 

export default ExampleOptional