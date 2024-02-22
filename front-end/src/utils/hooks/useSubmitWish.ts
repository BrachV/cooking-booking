import { useState } from "react";
import { submitWish } from "../api.ts";
import { Wish } from "../types.ts";

export function useSubmitWish() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();
    const [response, setResponse] = useState<Wish>();

    const submit = (wishData: Wish) => {
        setLoading(true);
        submitWish(wishData)
            .then(({ data }) => {
                setResponse(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return { submit, response, loading, error };
}