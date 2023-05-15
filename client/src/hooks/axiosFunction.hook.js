import {useState, useEffect, useCallback} from "react";

const useAxiosFunction = () => {
    const [response, setResponse] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); //different!
    const [controller, setController] = useState();


    const axiosFetch = async (configObj) => {
        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj;

        try {
            setLoading(true);
            const ctrl = new AbortController();
            setController(ctrl);

            const res = await axiosInstance[method.toLowerCase()](url, {
                ...requestConfig,
                signal: ctrl.signal
            })
            console.log(res.data)
            setResponse(res)
            return res
        } catch (err) {
            setError(err.response.data.message)
            return {}
        } finally {
            setLoading(false);
        }
    }


    const clearError = useCallback(() => setError(null),[])
    useEffect(() => {
        console.log(controller)

        // useEffect cleanup function
        return () => controller && controller.abort();

    }, [controller]);

    return [response, error, loading, axiosFetch, clearError ];
}




export default useAxiosFunction;