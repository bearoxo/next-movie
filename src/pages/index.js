import { useState } from 'react';
import Hero from '../assets/components/hero';
import LastWatch from '../assets/components/last-watch'
import { MovieProvider } from '../assets/contexts/MovieContext';

export default function Home({ moviesProps }) {
  return (
    <>
      <MovieProvider moviesProps={moviesProps}>
        <Hero />
        <LastWatch />
      </MovieProvider>
    </>
  )
}

export async function getServerSideProps () {
  const url = `${process.env.PSTMN_MOCK_API}/new_movies/?r_date=2020-01-01`
  try {
    const response = await fetch(url);
    const data = await response.json();
    const moviesProps = data.data
    console.log(moviesProps)
    return {
      props: {
        moviesProps
      }
    };
  } catch (error) {
    console.error("Error fetching latest movies:", error)
  }
  return {
    props: {
      moviesProps: []
    }
  };
};
