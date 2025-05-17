import { useQuery } from '@tanstack/react-query';
import { getContents } from '../api/contents/contentsApi';
import { Content } from '../types';

export const useContents = () => {
    return useQuery<Content[]>({
        queryKey: ['contents'],
        queryFn: getContents,
    });
};