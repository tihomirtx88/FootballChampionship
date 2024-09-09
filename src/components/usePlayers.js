import { useQuery } from "@tanstack/react-query";
import { apiPlayers } from "../services/apiPlayers";

export function usePlayers(){
    const { data:  queryPlayers = [] , error, isLoading} = useQuery({
        queryKey: ["players"],
        queryFn: apiPlayers,
        retry: false,
    });
    

    return { queryPlayers, error, isLoading };
};