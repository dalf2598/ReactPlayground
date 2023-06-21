import { useEffect, useState } from "react";
import ApiRequest from "../models/Request";

/*
With the introduction of React Strict Mode, it's no longer necessary to use `useRef` to check if a component is mounted. React Strict Mode includes additional checks that help detect potential issues, such as unsafe legacy lifecycles and other common mistakes, during the rendering and updating phases of components.

Previously, using `useRef` to check if a component is mounted was a common pattern to avoid potential issues when accessing component references or performing side effects. However, with React Strict Mode, these scenarios are already taken into consideration, and warnings or errors will be displayed if any problematic patterns are detected.

Therefore, you can rely on React Strict Mode's built-in checks and warnings instead of using `useRef` to track the mounted state of a component. This allows you to simplify your code and leverage the benefits provided by React Strict Mode for catching potential issues early on during development.
*/

const useFecth = (url: string) => {

    const [state, setState] = useState<ApiRequest>(
        {
            loading: true,
            error: null,
            data: null,
        }
    )

    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: null,
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data: data,
                })
            });
    }, [url])

    return state;
}

export default useFecth;