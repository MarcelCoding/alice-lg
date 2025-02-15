/*
 * Layout implements the default alice page with
 * the routeserver navigation on the left, a header on top
 * and a content view in the middle.
 */

import { useEffect, useRef }
  from 'react';

import { onLayoutReadyApi }
  from 'api';

import Content
  from 'app/components/content/Content';
import Errors
  from 'app/components/errors/Errors';
import NavigationSidebar
  from '../navigation/Sidebar';

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  const pageRef = useRef();

  useEffect(() => {
    onLayoutReadyApi(pageRef.current);
  }, [pageRef]);

  return (
    <div className={styles.parent} ref={pageRef}>
      <NavigationSidebar />
      <main className={styles.main}>
        <div className={styles.body}>
          <Errors />
          {children}
        </div>
        <footer className={styles.footer}>
          <a href="https://github.com/alice-lg/alice-lg" target="_blank">Alice - Through the Looking Glass</a>
          <div className={styles.leaglLinks}>
            <a href="https://dd-ix.net/privacy-policy" target="_blank">Privacy Policy</a>
            <a href="https://dd-ix.net/imprint" target="_blank">Imprint</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Layout;
