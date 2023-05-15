import {useEffect, useState} from "react";

export function useAsync(func, deps = []) {
    const [state, setState] = useState({ loading: true, error: null, data: null })
    useEffect(
        () => {
            let mounted = true
            func()
                .then(data => mounted && setState({ loading: false, error: null, data }))
                .catch(error => mounted && setState({ loading: false, error, data: null }))
            return () => { mounted = false }
        },
        []
    )
    return state
}