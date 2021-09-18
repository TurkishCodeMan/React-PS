import TextInput from "ps-react/TextInput";

function ExampleOptional() {
    return (
        <TextInput
            htmlId="example optional"
            label="First Name"
            name="firstName"
            required
            onChange={() => { }}
        />
    )
}

export default ExampleOptional