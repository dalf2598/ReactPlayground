import { useEffect, useState } from "react";
import getGifs from "../utils/GetGifs";
import GifRequest from "../models/GifRequest";


const useFetchGifs = (category : string) : GifRequest  => {
    const [state, setState] = useState<GifRequest>({
        data: [],
        loading: true
    })
    
    useEffect(() => {
        getGifs(category).then(
            gifts => {
                setState({
                    data: gifts,
                    loading: false
                });
            }
        )
    }, [category])

    return state;
}

export default useFetchGifs;