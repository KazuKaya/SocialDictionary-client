import { useQuery } from '@tanstack/react-query';
import { getTitles, getTrendingTitles } from '../api/titles/titlesApi';
import { Title } from '../types'

export const useTitles = () => useQuery<Title[]>({ queryKey: ['titles'], queryFn: getTitles });
export const useTrendingTitles = () => useQuery<Title[]>({ queryKey: ['trendingTitles'], queryFn: getTrendingTitles });