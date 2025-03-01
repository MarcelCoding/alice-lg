import { useRef, useEffect } from 'react';
import { useQuery } from '../../context/query';
import SearchQueryInput from './SearchQueryInput';

const Help = () => {
  return (
    <div>
      <h3>Did you know?</h3>
      <p>You can search for</p>
      <ul>
        <li><b>Prefixes</b></li>
        <li><b>Peers</b> by entering their name</li>
        <li><b>ASNs</b> by prefixing them with 'AS'</li>
        <li><b>Communities</b> by prefixing them with '#'</li>
      </ul>
      <p>Just start typing!</p>
    </div>
  );
}

const SearchGlobalInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const [{ q }] = useQuery();

  // Focus input
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <div className="my-container">
      <div className="my-card">
        <h2>Search on all route servers</h2>
        <SearchQueryInput
          ref={ref}
          placeholder="Search for Prefixes, Peers or ASNs on all Route Servers" />
      </div>
      {!q && <Help />}
    </div>
  );
}

export default SearchGlobalInput;
