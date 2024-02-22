import { useEffect, useState } from "react";
import { fetchParticipationsByEmail } from "../api.ts";
import { Participation } from "../types.ts"; 

export function useFetchParticipationsByEmail(email: string) {
    const [participations, setParticipations] = useState<Participation[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        setLoading(true);
        fetchParticipationsByEmail(email)
            .then(({ data }) => {
                setParticipations(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [email]);

    return { participations, loading, error };
}