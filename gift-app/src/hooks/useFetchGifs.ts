import { useEffect, useState } from "react";
import getGifs from "../utils/GetGifs";
import Gif from "../models/Gif";

interface request{
    data: Gif[];
    loading: boolean;
}

const useFetchGifts = (category : string) : request  => {
    const [state, setState] = useState<request>({
        data: [],
        loading: true
    })
    
    useEffect(() => {
        getGifs(category).then(
            imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            }
        )
    }, [category])

    return state;
}

export default useFetchGifts;