import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { CreateTripPage } from './pages/create-trip'
import { TripDetails } from './pages/trip-details'
import { TripProvider } from './contexts/useTrip'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TripProvider>
        <CreateTripPage />
      </TripProvider>
    )
  },
  {
    path: '/trips/:tripId',
    element: (
      <TripProvider isFetchTrip>
        <TripDetails />
      </TripProvider>
    )
  }
])

export function App() {
  return <RouterProvider router={router} />
}
