import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { getUrl } from "../data/DownloadUrl";
import styles from "../styles/Home.module.css";
const Get: NextPage = () => {
  const data = getUrl();
  useEffect(() => {
    window.open(data, "_blank");
  }, [data]);
  return (
    <div className={styles.container}>
      <Head>
        <title>下载 Alicorn - 面向任何玩家的全能 Minecraft 启动器</title>
        <meta name="description" content="Alicorn 启动器" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>谢谢！您的下载已经开始。</h1>
        <br />
        <br />
        <p className={styles.description}>
          如果您的下载没有自动开始，请
          <a
            className={styles.pink}
            target="_blank"
            href={data}
            rel="noreferrer"
          >
            使用此直接链接
          </a>
          。
        </p>
      </main>
    </div>
  );
};

export default Get;
