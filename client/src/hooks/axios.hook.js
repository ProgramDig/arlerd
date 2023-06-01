import {useState, useEffect, useCallback} from "react";

const useAxios = (configObj) => {

    const {
        axiosInstance,
        method,
        url,
        requestConfig = {}
    } = configObj;

    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(0);

    const refetch = () => setReload(prev => prev + 1);


    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const res = await axiosInstance[method.toLowerCase()](url, {
                    ...requestConfig,
                })
                console.log(res);
                if (isMounted) {
                   await setResponse(res);
                }
            } catch (err) {
                if (isMounted) {
                    if (err.name === 'AbortError')
                        console.log('Request was cancelled');
                    console.log(err.message);
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        }

        // call the function
       async function fetchFlag(){
            if(isMounted){
               await fetchData()
            }
        }
        fetchFlag()
        // useEffect cleanup function
        return () => {
            isMounted = false;
        };

    }, [reload]);

    return [response, error, loading, refetch];
}

export default useAxios