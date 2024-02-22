import { useEffect, useState } from "react";
import { fetchAteliers } from "../api.ts";
import { Atelier } from "../types.ts";

export function useFetchAteliers() {

    const [ateliers, setAteliers] = useState<Atelier[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        setLoading(true);
        fetchAteliers()
            .then(({ data }) => {
                setAteliers(data)
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    return { ateliers, loading, error };
}