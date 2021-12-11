import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/FAQ.module.css";
const FAQ: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>常问问题 - 面向任何玩家的全能 Minecraft 启动器</title>
        <meta name="description" content="Alicorn 启动器" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <p className={styles.question}>Q：如何运行 Alicorn？</p>
        <p className={styles.answer}>
          A：运行 Alicorn 非常简单！首先 <a href="../get">从这里下载 Alicorn</a>{" "}
          ，之后解压缩下载的文件，再运行 Alicorn.exe 或者 alicorn.sh 即可。
        </p>

        <p className={styles.question}>Q：如何更新 Alicorn？</p>
        <p className={styles.answer}>
          A：默认情况下，Alicorn 具有自动更新，将自动从上游获取数据。
          <br />
          如果你（或者某些软件）关闭了自动更新，可以在
          <i>「选项」&gt;「高级和重置」&gt;「自动更新」</i>重新打开。
        </p>

        <p className={styles.question}>
          Q：我删除了文件夹中的一些文件，现在我无法打开 Alicorn 了！
        </p>
        <p className={styles.answer}>
          A：……Alicorn 不会携带没用的文件，请<i>保留文件夹中的全部文件</i>。
          <br />
          Alicorn
          和其它启动器不一样，这些文件是她速度和功能的来源，因此不能删除。
          <br />请<i>重新安装 Alicorn</i>，你的设置和数据将会保留。
        </p>

        <p className={styles.question}>
          Q：我找不到登录 Microsoft 帐号的地方！
        </p>
        <p className={styles.answer}>
          A：请<i>直接启动游戏</i>，启动过程中我们将视情况向你询问凭据。
        </p>
      </main>
    </div>
  );
};

export default FAQ;
