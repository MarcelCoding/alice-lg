import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./RouteServers.module.css";
import { FC } from 'react';
import { useErrorHandler } from "../../context/errors";
import { useRouteServers } from "../../context/route-servers";

interface StatusProps {
  routeServerId: string;
}

const Status: FC<StatusProps> = (props) => {
  const [status, setStatus] = useState({
    backend: "Loading...",
    version: "",
  });
  const [error, setError] = useState<string | null>(null);
  const handleError = useErrorHandler();

  useEffect(() => {
    axios.get<{ status: { backend: string, version: string } }>(`/api/v1/routeservers/${props.routeServerId}/status`)
      .then(
        ({ data }) => setStatus(data.status),
        (error: { response?: { data?: { tag?: string } } }) => setError(error.response?.data?.tag ?? 'Unknown Error') // Local error display 
      );
  }, [props.routeServerId, handleError]);

  if (error === "CONNECTION_REFUSED") {
    return (
      <div className={styles.error}>
        route server unreachable
      </div>
    );
  } else if (error === "GENERIC_ERROR") {
    return (
      <div className={styles.error}>
        did not respond
      </div>
    );
  } else if (error) {
    return (
      <div className={styles.error}>
        {error}
      </div>
    );
  }

  return (
    <div className={styles.version}>
      {status.backend} {status.version}
    </div>
  );
};

const RouteServers: FC = () => {
  const routeServers: { id: string, name: string }[] = useRouteServers();

  return (
    <div className={styles.body}>
      <h2 className={styles.title}>Route Servers</h2>
      <ul className={styles.routeServerList}>
        {routeServers.map((rs) =>
          <li key={rs.id}>
            <Link to={`/routeservers/${rs.id}`}>{rs.name}</Link>
            <Status routeServerId={rs.id} />
          </li>)}
      </ul>
    </div>
  );
};


export default RouteServers;
