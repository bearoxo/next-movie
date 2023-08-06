import HeroSearch from '../assets/components/hero-search';
import SearchResult from '../assets/components/search-result';
import { SearchProvider } from '../assets/contexts/SearchContext';

export default function Search() {
  return (
    <>
      <SearchProvider>
        <HeroSearch />
        <SearchResult />
      </SearchProvider>
    </>
  )
}