import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url, method = 'GET') => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        const fetchData = async () => {
            try {
                const response = await axios({ url, method });
                if (mounted) {
                    setData(response.data);
                    setLoading(false);
                }
            } catch (error) {
                if (mounted) {
                    setError(error);
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            mounted = false;
        };
    }, [url, method]);

    return { data, loading, error };
};

export default useAxios;