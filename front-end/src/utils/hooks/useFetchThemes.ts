import { useEffect, useState } from "react";
import { fetchThemes } from "../api.ts";
import { Theme } from "../types.ts";

export function useFetchThemes() {

    const [themes, setThemes] = useState<Theme[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        setLoading(true);
        fetchThemes()
            .then(({ data }) => {
                setThemes(data)
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return { themes, loading, error };
}