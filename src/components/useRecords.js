import { useQuery } from "@tanstack/react-query";
import { apiRecords } from "../services/apiRecords";

export function useRecords(){
    const { data:  queryRecords = [] , error, isLoading} = useQuery({
        queryKey: ["records"],
        queryFn: apiRecords,
        retry: false,
    });

    return { queryRecords, error, isLoading };
};