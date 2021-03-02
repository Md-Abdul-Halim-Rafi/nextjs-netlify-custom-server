import styles from "@/styles/Home.module.css";
import axios from "axios";
import Head from "next/head";

const getTodo = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return response.data;
};

export default function Todo({ data }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{data.title}</h1>

        <p className={styles.description}>
          <a href="/">Go to home</a>
        </p>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = await getTodo(context.query.id);

  return { props: { data } };
}
