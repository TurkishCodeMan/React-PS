import RegistrationForm from "ps-react/RegistrationForm/RegistrationForm";

function ExampleRegistrationForm() {
    async function register(user) {
        return new Promise((resolve, rejected) => {
            return setTimeout(resolve, 3000);
        })
    }
    return <RegistrationForm onSubmit={register} />
}

export default ExampleRegistrationForm;