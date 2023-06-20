import { useEffect, useState } from "react";
import ApiRequest from "../models/Request";

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