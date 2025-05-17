import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/users/usersApi';
import { User } from '../types'


export const useUsers = () => useQuery<User[]>({ queryKey: ['users'], queryFn: getUsers });