import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/layout/Header';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className='flex flex-col w-screen h-screen bg-gray-50'>
      <Header />
      <Outlet />
    </div>
  )
}
