import { useQuery } from '@tanstack/react-query';
import { getRecentContents } from '../api/contents/contentsApi';
import { Content } from '../types';

export const useRecentContents = () =>
    useQuery<Content[]>({ queryKey: ['recentContents'], queryFn: getRecentContents });