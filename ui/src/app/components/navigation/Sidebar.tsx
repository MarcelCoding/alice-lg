import { Link } from 'react-router-dom';
import RouteServers from './RouteServers';
import logo from "../../../img/logo.svg";
import styles from "./Sidebar.module.css";
import { FC } from 'react';

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Link to='/' className={styles.header}>
        <img src={logo} alt="DD-IX" width="135471" height="45961" className={styles.logo} />
      </Link>
      <div className={styles.body}>
        <RouteServers />
      </div>
    </aside>
  );
}

export default Sidebar;
