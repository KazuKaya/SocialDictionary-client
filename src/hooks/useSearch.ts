import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { SearchApi, SearchResult } from "../api/search/SearchApi";

export const useSearch = (query: string, debounceTime = 500) => {
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, debounceTime);

        return () => {
            clearTimeout(handler);
        };
    }, [query, debounceTime]);

    return useQuery<SearchResult[]>({
        queryKey: ["search", debouncedQuery],
        queryFn: () => SearchApi(debouncedQuery),
        enabled: !!debouncedQuery,
        staleTime: 5 * 60 * 1000,
    });
};