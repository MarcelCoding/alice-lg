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
  from 'app/components/navigation/Sidebar';

const Layout = ({children}) => {
  const pageRef = useRef();

  useEffect(() => {
    onLayoutReadyApi(pageRef.current);
  }, [pageRef]);

  // Main Layout
  return (
    <div className="page" ref={pageRef}>
      <Errors />
      <NavigationSidebar />
      <div className="page-body">
        <main className="page-content">
          <div className="main-content-wrapper">
            {children}
          </div>
          <footer className="page-footer">
            <Content id="footer"></Content> 
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Layout;
