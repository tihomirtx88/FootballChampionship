import { useQuery } from "@tanstack/react-query";
import { apiMatches } from "../services/apiMatches";

export function useMatches(){
    const { data:  queryMatches = [] , error, isLoading} = useQuery({
        queryKey: ["matches"],
        queryFn: apiMatches,
        retry: false,
    });

    console.log(queryMatches, 'from use matvhes');
    

    return { queryMatches, error, isLoading };
};