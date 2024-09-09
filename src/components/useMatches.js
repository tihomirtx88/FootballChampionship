import { useQuery } from "@tanstack/react-query";
import { apiMatches } from "../services/apiMatches";

export function useMatches(){
    const { data: matches, error} = useQuery({
        queryKey: ["matches"],
        queryFn: () => apiMatches(),
        retry: false,
    });

    return { error, matches };
};