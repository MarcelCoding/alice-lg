import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className={styles.central}>
        <h1>404</h1>
        <p>The requested page could not be found</p>
      </div>
    </div>
  );
}

export default NotFoundPage;
