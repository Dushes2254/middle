import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {routeConfig.map(({ element, path }) => (
        <Route element={<div className='page-wrapper'>{element}</div>} key={path} path={path} />
      ))}
    </Routes>
  </Suspense>
)
