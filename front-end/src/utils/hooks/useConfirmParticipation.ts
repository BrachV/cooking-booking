import { useState } from "react";
import { confirmParticipation } from "../api.ts";

export function useConfirmParticipation() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();
    const [confirmed, setConfirmed] = useState<boolean>(false);

    const confirm = (participationId: number) => {
        setLoading(true);
        confirmParticipation(participationId)
            .then(() => {
                setConfirmed(true);
                setError(null);
            })
            .catch((err) => {
                setError(err);
                setConfirmed(false);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { confirm, confirmed, loading, error };
}