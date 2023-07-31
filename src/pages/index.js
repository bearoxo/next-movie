import Hero from '../assets/components/hero';
import LastWatch from '../assets/components/last-watch'
import { MovieProvider } from '../assets/contexts/MovieContext';

export default function Home() {
  return (
    <>
      <MovieProvider>
        <Hero />
        <LastWatch />
      </MovieProvider>
    </>
  )
}

