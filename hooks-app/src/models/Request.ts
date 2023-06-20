interface BBQuote{
    quote: string,
    author: string,
}

interface ApiRequest{
    data: BBQuote[] | null;
    loading: boolean;
    error: string | null;
}

export default ApiRequest;