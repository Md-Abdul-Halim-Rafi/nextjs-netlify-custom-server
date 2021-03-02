import styles from "@/styles/Home.module.css";
import axios from "axios";
import Head from "next/head";
import { useQuery } from "react-query";

const getTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return response.data;
};

export default function Home() {
  // Queries
  const { data, error, isLoading } = useQuery("todos", getTodos);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.grid}>
            {data.map((item) => (
              <a href={item.id} className={styles.card}>
                <h3>{item.title} &rarr;</h3>
              </a>
            ))}
          </div>
        )}

        {error && <p>{error}</p>}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
