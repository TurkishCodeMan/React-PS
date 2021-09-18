import TextInputCSSModules from "ps-react/TextInputCSSModules";

function ExampleCSS() {
    return (
        <TextInputCSSModules
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

export default ExampleCSS