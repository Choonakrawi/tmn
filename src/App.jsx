import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import { SpeedInsights } from '@vercel/speed-insights/react'

// Lazy load components
const Hero = lazy(() => import('./components/Hero'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const ParticleBackground = lazy(() => import('./components/ParticleBackground'))

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
        <div className="relative z-10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />
            <main>
              <Suspense fallback={<Loading />}>
                <Hero />
                <Portfolio />
              </Suspense>
            </main>
          </div>
          <Footer />
        </div>
      </div>
      <SpeedInsights />
    </ErrorBoundary>
  )
}

export default App
