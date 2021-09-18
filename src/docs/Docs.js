import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import ComponentPage from "./ComponentPage";
import componentData from "../../config/componentData";

function Docs(props) {
    var [route, setRoute] = useState(window.location.hash.substr(1));

    function routeControl() {
        return setRoute(() => route = window.location.hash.substr(1));
    }

    useEffect(() => {
        window.addEventListener('hashchange', routeControl)
        return () => window.removeEventListener('hashchange', routeControl);
    }, [route, routeControl])

    const component = route ? componentData.filter(
        component => component.name === route
    )[0] : componentData[0];


    return (
        <div>
            <Navigation components={componentData.map(component => component.name)} />
            <ComponentPage component={component} />
        </div>
    )
}

export default Docs;