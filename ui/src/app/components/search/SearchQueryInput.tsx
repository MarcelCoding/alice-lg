import { useCallback, Ref } from 'react'
import { useQuery, PARAM_LOAD_NOT_EXPORTED } from '../../context/query';
import SearchInput from './SearchInput';

export interface SearchQueryInputProps {
  queryKey?: string,
  queryDefault?: string,
  debounce?: number,
  placeholder: string,
  ref: Ref<HTMLInputElement>,
};

/**
 * SearchQueryInput is a SearchInput, updating the query.
 */
const SearchQueryInput = ({
  queryKey = "q",
  queryDefault = "",
  debounce = 300,
  placeholder,
  ref,
}: SearchQueryInputProps) => {
  const [query, setQuery] = useQuery({
    [queryKey]: queryDefault,
  });

  const updateQuery = useCallback((v: string) => setQuery((q) => ({
    [queryKey]: v,
    [PARAM_LOAD_NOT_EXPORTED]: q[PARAM_LOAD_NOT_EXPORTED], // Keep state
  })), [setQuery, queryKey]);

  return (
    <SearchInput
      value={query[queryKey]}
      debounce={debounce}
      onChange={updateQuery}
      placeholder={placeholder}
      ref={ref}
    />
  );
};

export default SearchQueryInput;
