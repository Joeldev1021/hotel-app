import { useEffect, useState } from 'react';

export default function useFetch (url) {
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res);
                setIsLoading(false);
            })
            .catch(err => {
                setIsError(err);
                setIsLoading(false);
            });
    }, [url]);

    return { data, isError, isLoading, setData };
}
