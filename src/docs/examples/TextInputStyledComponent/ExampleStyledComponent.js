import TextInputStyledComponent from "ps-react/TextInputStyledComponent";

function ExampleStyled() {
    return (
        <TextInputStyledComponent
            htmlId="example-optional"
            label="First Name"
            name="firstName"
            required
            error="First name is required"
            onChange={() => { }}
        />
    )
}

//Exercise SelectInput CheckboxList .... yapılacak 

export default ExampleStyled