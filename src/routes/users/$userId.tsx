import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/users/$userId')({
  component: UserDetailComponent,
})

function UserDetailComponent() {
  const { userId } = Route.useParams()

  const { data: user, isLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      // Replace with your actual API call
      return {
        id: userId,
        name: user.name,
        content: 'This is the detailed content of the user...',
        createdAt: '2024-01-15',
        status: 'published',
        author: user.name
      }
    }
  })

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="px-4">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{userId}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By {user?.author}</span>
              <span>Created: {user?.createdAt}</span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user?.status === 'published'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
                }`}>
                {user?.status}
              </span>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Edit
          </button>
        </div>

        <div className="prose max-w-none">
          <p className="text-gray-700">{user?.content}</p>
        </div>
      </div>
    </div>
  )
}