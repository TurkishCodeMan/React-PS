import TextInput from "ps-react/TextInput";

function ExampleOptional() {
    return (
        <TextInput
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