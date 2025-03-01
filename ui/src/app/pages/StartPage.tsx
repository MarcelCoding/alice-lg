import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useConfig } from '../context/config';
import { useQuery } from '../context/query';
import PageHeader from '../components/page/Header';
import SearchGlobalInput from '../components/search/SearchGlobalInput';

const StartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { prefix_lookup_enabled } = useConfig();
  const [{ q }] = useQuery({ q: "" });

  // Make sure location is search when we are running a query
  useEffect(() => {
    if (!prefix_lookup_enabled || q === "") {
      return;
    }
    navigate({ ...location, pathname: "/search" }, { replace: true });
  }, [q, prefix_lookup_enabled, navigate, location]);

  if (!prefix_lookup_enabled) {
    return null;
  }

  return (
    <div>
      <PageHeader>Home</PageHeader>

      <div className="page-body">
        <div>
          <h1>DD-IX Looking Glass</h1>
          <p>powered by Alice, your friendly BIRD Looking Glass</p>
        </div>

        <SearchGlobalInput />
      </div>
    </div>
  );
}

export default StartPage;
