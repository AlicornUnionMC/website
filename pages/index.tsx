import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const ChooseEle = ({
  id,
  val,
  children,
}: {
  id: string;
  val: string;
  children: JSX.Element;
}): JSX.Element => {
  if (val === id) {
    return children;
  }
  return <></>;
};

const TITLE_ID = Math.floor(Math.random() * 6).toString();
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alicorn - 面向任何玩家的全能 Minecraft 启动器</title>
        <meta name="description" content="Alicorn 启动器" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ChooseEle id={"0"} val={TITLE_ID}>
          <h1 className={styles.title}>
            这就是你<span className={styles.pink}>启动世界</span>的方式
          </h1>
        </ChooseEle>
        <ChooseEle id={"1"} val={TITLE_ID}>
          <h1 className={styles.title}>
            想象这样一个<span className={styles.pink}>启动器</span>……
          </h1>
        </ChooseEle>
        <ChooseEle id={"2"} val={TITLE_ID}>
          <h1 className={styles.title}>
            当下流行的 <span className={styles.pink}>MC Java 版启动器</span>
          </h1>
        </ChooseEle>
        <ChooseEle id={"3"} val={TITLE_ID}>
          <h1 className={styles.title}>
            你梦中所见的<span className={styles.pink}>启动器</span>，就在这里。
          </h1>
        </ChooseEle>
        <ChooseEle id={"4"} val={TITLE_ID}>
          <h1 className={styles.title}>
            性能出众、性情温和、性格活泼的
            <br />
            下一代<span className={styles.pink}>启动器</span>
          </h1>
        </ChooseEle>
        <ChooseEle id={"5"} val={TITLE_ID}>
          <h1 className={styles.title}>
            开放、自由、跨平台
            <br />
            启动器中的
            <span className={styles.pink}>同类最佳工具</span>
          </h1>
        </ChooseEle>
        <br />
        <br />
        <p className={styles.description}>
          你想要{" { "}
          <span className={styles.pink}>启动、安装、创作、获取</span>
          {" } "}
          些什么{" { "}
          <span className={styles.pink}>核心、模组、整合包</span>
          {" } "}？
        </p>
        <p className={styles.description}>
          或者是{" { "}
          <span className={styles.pink}>知晓、解决、讨论、探索</span>
          {" } "}
          些什么{" { "}
          <span className={styles.pink}>问题、技术、冷知识</span>
          {" } "}？
        </p>
        <p className={styles.description}>
          <b className={styles.pink}>Alicorn</b> 都可以满足你的愿望。
        </p>
        <div className={styles.grid}>
          <Link href="/get" passHref>
            <div className={styles.card + " " + styles.hover}>
              <h2 className={styles.pink}>下载 Download &rarr;</h2>
              <p>Alicorn 可以运行在 Windows 和 GNU/Linux 上</p>
            </div>
          </Link>

          <Link href="/explore" passHref>
            <div className={styles.card}>
              <h2 className={styles.pink}>探索 Explore &rarr;</h2>
              <p>看看 Alicorn 提供了哪些你心仪的功能？</p>{" "}
            </div>
          </Link>

          <Link href="/guide" passHref>
            <div className={styles.card}>
              <h2 className={styles.pink}>指南 Guide &rarr;</h2>
              <p>通过几个简单的例子在几分钟内学会使用 Alicorn</p>
            </div>
          </Link>

          <Link href="/help" passHref>
            <div className={styles.card}>
              <h2 className={styles.pink}>帮助 Help &rarr;</h2>
              <p>把疑难和故障交给我们，你只负责使用</p>
            </div>
          </Link>

          <Link href="/involve" passHref>
            <div className={styles.card}>
              <h2 className={styles.pink}>加入 Join &rarr;</h2>
              <p>你能够让 Alicorn 在哪方面变得更好？</p>
            </div>
          </Link>

          <Link href="/about" passHref>
            <div className={styles.card}>
              <h2 className={styles.pink}>关于 About &rarr;</h2>
              <p>关于我们和 Alicorn 启动器的一点资料</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
