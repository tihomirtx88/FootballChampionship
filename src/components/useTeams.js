import { useQuery } from "@tanstack/react-query";
import { apiTeams } from "../services/apiTeams";

export function useTeams(){
    const { data:  queryTeams = [] , error, isLoading} = useQuery({
        queryKey: ["teams"],
        queryFn: apiTeams,
        retry: false,
    });

    return { queryTeams, error, isLoading };
};