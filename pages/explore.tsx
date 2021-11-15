import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { MouseEventHandler } from "react";
import Magic from "../components/Magic";
import cutie from "../styles/Cutie.module.css";
import styles from "../styles/Explore.module.css";
import modx from "../styles/Modx.module.css";

const showImg: MouseEventHandler<HTMLImageElement> = (e) => {
  e.currentTarget.style.zIndex = "999";
};

const backImg: MouseEventHandler<HTMLImageElement> = (e) => {
  e.currentTarget.style.zIndex = "initial";
};

const Explore: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alicorn 特性和功能 - 面向任何玩家的全能 Minecraft 启动器</title>
        <meta name="description" content="Alicorn 启动器" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Magic />
        <span className={styles.right + " " + styles.first}>
          <h1 className={styles.title}>一见钟情。</h1>
          <p className={styles.description}>
            Alicorn 将是你 Minecraft
            旅途上最好的朋友。无论你看重哪个方面，Alicorn 都会是你的不二选择。
            <br />
            <br />
            你可以选择你最喜欢的版块开始，也可以滚动滚轮继续阅读。
            <br />
            <br />
            <a href="#appr">&rarr; 外观与体验 Appearence</a>
            <br />
            <a href="#tech">&rarr; 技术与特性 Features</a>
            <br />
            <a href="#perf">&rarr; 性能与速度 Performance</a>
            <br />
            <a href="#srvc">&rarr; 服务与支持 Support</a>
          </p>
        </span>

        <span className={styles.left} id="appr">
          <h1 className={styles.title}>
            Material Design 用户界面
            <img
              alt="Alicorn Appearence"
              src="https://img.gejiba.com/images/fe41f3014d36191e52ea5328795ab3ae.png"
              height="400"
            />
          </h1>
          <p className={styles.description}>
            超过 90% 的{" "}
            <span className={styles.pink}>Material Design 组件</span>
            ，细节，极致处理。
            <br />
            每一处都精心布置，在所有平台上测试，确保给你最佳的显示效果。
            <br />
            <br />
            OpenType 文本字体，SVG 矢量级图标，CSS 阴影渲染。
            <br />
            视觉，竟如此美妙。
            <br />
            <br />
            <a
              href="https://material.io/design/introduction"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; 了解 Material Design
            </a>
            <br />
            <a href="https://mui.com" target="_blank" rel="noreferrer">
              &rarr; 了解 Material UI
            </a>
          </p>
        </span>

        <span className={styles.right}>
          <h1 className={styles.title}>
            <img
              alt="Alicorn Appearence"
              src="https://img.gejiba.com/images/625c7a4fd21b10eacf62e93264947ccb.png"
              height="400"
              style={{
                transform: "translate(-13.5em, -1em)",
              }}
              onMouseEnter={showImg}
              onMouseLeave={backImg}
            />
            <img
              alt="Alicorn Appearence"
              src="https://img.gejiba.com/images/0b1aa30d172583efa86ae2236a0914ad.png"
              height="400"
              style={{
                transform: "translate(-14.5em, -0.5em)",
              }}
              onMouseEnter={showImg}
              onMouseLeave={backImg}
            />
            <img
              alt="Alicorn Appearence"
              src="https://img.gejiba.com/images/48d826f25dd85707a84e80d086382caf.png"
              height="400"
              style={{
                transform: "translate(-15.5em, 0em)",
              }}
              onMouseEnter={showImg}
              onMouseLeave={backImg}
            />
            <img
              alt="Alicorn Appearence"
              src="https://img.gejiba.com/images/295042e3e90a85efc563ec797b9c53c7.png"
              height="400"
              style={{
                transform: "translate(-16.5em, 0.5em)",
              }}
              onMouseEnter={showImg}
              onMouseLeave={backImg}
            />
            <img
              alt="Alicorn Appearence"
              src="https://img.gejiba.com/images/a92d448d932330b7cfe823aa6e4a4410.png"
              height="400"
              style={{
                transform: "translate(-17.5em, 1em)",
              }}
              onMouseEnter={showImg}
              onMouseLeave={backImg}
            />
            <img
              alt="Alicorn Appearence"
              src="https://img.gejiba.com/images/536f95159ca3344927693f5d9c632b79.png"
              height="400"
              style={{
                transform: "translate(-18.5em, 1.5em)",
              }}
              onMouseEnter={showImg}
              onMouseLeave={backImg}
            />
            超多主题配色，任你选。
          </h1>
          <p className={styles.description}>
            基于 Material UI 的颜色系统，Alicorn 提供了
            <span className={styles.pink}>丰富的主题配色</span>。
            <br />从
            <span style={{ backgroundColor: "black", color: "white" }}>
              深色
            </span>
            到浅色，从<span style={{ color: "#df307f" }}>粉红</span>到
            <span style={{ color: "#3681c6" }}>碧蓝</span>，甚至还有随机数。
            <br />
            <br />
            珍奇紫、薄荷绿、灰色粉、经典蓝……多到这里都放不下。
            <br />
            颜色，轻按即变换。
            <br />
            <br />
            <a>&larr; 移动鼠标，查看不同主题</a>
          </p>
        </span>

        <span className={styles.left}>
          <h1 className={styles.title}>
            语言自然，主次分明。
            <span
              className={styles.imglike}
              style={{
                lineHeight: "1.5em",
              }}
            >
              <span style={{ color: "gray" }}>
                “处理这些文件中……请稍候，我将尽快完成。”
              </span>
              <br />
              <span style={{ color: "gray" }}>
                “对不起对不起！我刚刚睡着了……”
              </span>
              <br />
              <span>“嗨！你叫我吗？”</span>
              <br />
              <span style={{ color: "gray" }}>“此核心可以加载 Fabric Mod”</span>
              <br />
              <span style={{ color: "gray" }}>
                “你想要对本次启动进行故障排除吗？”
              </span>
            </span>
          </h1>
          <p className={styles.description}>
            远离难懂的术语表述，Alicorn 打磨了一套
            <span className={styles.pink}>自然语言</span>
            。表述简单，容易理解。
            <br />
            使用 Alicorn，就像和她对话一样。
            <br />
            <br />
            严肃时可以很认真，轻松时又可以很可爱……
            <br />
            亲切，在字里行间。
            <br />
            <br />
            <a
              href="https://github.com/Andy-K-Sparklight/Alicorn/blob/main/resources/shared/defaults/PonyCN.lang"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; 访问 PonyCN 语言文件
            </a>
          </p>
        </span>

        <span className={styles.right}>
          <h1 className={styles.title}>
            <img
              alt="Alicorn Appearence"
              src="https://img.gejiba.com/images/270845f0072f67b0e1cbcc61a4b97196.png"
              height="400"
            />
            安全保护，不怕误操作。
          </h1>
          <p className={styles.description}>
            对于大多数操作，Alicorn 都设有
            <span className={styles.pink}>安全保护措施</span>
            。
            <br />
            极少数危险操作 Alicorn 会向你询问，而且小心地完成。
            <br />
            <br />
            这些安全保护都是自动的，Alicorn 很小心地控制它们。
            <br />
            要是不费点劲，还真搞不出问题来。
            <br />
            安全，用起来放心。
            <br />
            <br />
            <a
              href="https://minecraft.fandom.com/zh/wiki/%E6%95%99%E7%A8%8B/%E4%B8%8D%E8%AF%A5%E5%81%9A%E7%9A%84%E4%BA%8B#.E5.A4.B1.E5.8E.BB.E4.BA.86.E7.89.A9.E5.93.81.E5.B0.B1.E5.88.A0.E9.99.A4.E4.BD.A0.E7.9A.84.E4.B8.96.E7.95.8C"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; 不要随意删除你的游戏
            </a>
          </p>
        </span>

        <span className={styles.left} id="tech">
          <h1 className={styles.title}>
            MODX，Mod 自动选择。
            <span
              style={{
                height: "400px",
                width: "744px",
                color: "white",
              }}
              className={styles.imglike}
            >
              <div
                className={modx.modx1}
                style={{
                  fontSize: "20px",
                  padding: "6px",
                }}
              >
                Forge
                <br />
                <span style={{ fontSize: "14px" }}>不可加载</span>
              </div>
              <div
                className={modx.modx2}
                style={{
                  fontSize: "20px",
                  padding: "6px",
                }}
              >
                Fabric
                <br />
                <span style={{ fontSize: "14px" }}>可以加载</span>
              </div>
              <div
                className={modx.modx3}
                style={{
                  fontSize: "20px",
                  padding: "6px",
                }}
              >
                Lite
                <br />
                <span style={{ fontSize: "14px" }}>不可加载</span>
              </div>
            </span>
          </h1>
          <p className={styles.description}>
            考虑到部分 Mod 加载器糟糕的设计，Alicorn 加入了{" "}
            <span className={styles.pink}>MODX</span> 来解决它们。
            <br />
            MODX
            会扫描所有的模组，并在游戏启动时将版本或加载器不合适的模组暂时排除。
            <br />
            <br />
            综合多种信息判定，Semver 版本比较……
            <br />
            模组，从此不烦恼。
            <br />
            <br />
            <a href="https://fabricmc.net" target="_blank" rel="noreferrer">
              &rarr; 了解 Fabric
            </a>
          </p>
        </span>
        <span className={styles.right}>
          <h1 className={styles.title}>
            <img
              alt="Alicorn Tech"
              src="https://img.gejiba.com/images/7e51e3016e1a6f9d0aff9c37607262e6.png"
              height="400"
            />
            使用 Pff 管理和安装 Mod。
          </h1>
          <p className={styles.description}>
            <code>
              <b>
                <span style={{ color: "#859900" }}>rarity@Equestria</span>:
                <span style={{ color: "#268bd2" }}>~</span>$ pff add fabric-api
              </b>
            </code>
            <br />
            Pff 是<span className={styles.pink}>安装和管理 Mod 的工具</span>
            ，它可以从 Mod 平台下载合适版本的 Mod。
            <br />
            你只需要输入 Mod 的名字，就可以了。其余的 Pff 会为你搞定。
            <br />
            <br />
            还能检测依赖缺失，检测版本……
            <br />
            你用，其它都自动。
            <br />
            <br />
            <a href="https://modrinth.com" target="_blank" rel="noreferrer">
              &rarr; 了解 Modrinth
            </a>
            <br />
            <a
              href="https://www.curseforge.com"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; 了解 Curseforge
            </a>
          </p>
        </span>

        <span className={styles.left}>
          <h1 className={styles.title}>
            端到端，连接你我的世界。
            <span
              style={{
                height: "400px",
                width: "744px",
                color: "white",
              }}
              className={styles.imglike}
            >
              <div
                className={cutie.client1}
                style={{
                  fontSize: "20px",
                  padding: "6px",
                }}
              >
                Client 1
                <br />
                <span style={{ fontSize: "14px" }}>客户端</span>
              </div>
              <div
                className={cutie.client2}
                style={{
                  fontSize: "20px",
                  padding: "6px",
                }}
              >
                Client 2
                <br />
                <span style={{ fontSize: "14px" }}>客户端</span>
              </div>
              <div
                className={cutie.server}
                style={{
                  fontSize: "20px",
                  padding: "6px",
                }}
              >
                Server
                <br />
                <span style={{ fontSize: "14px" }}>服务端</span>
              </div>
              <div className={cutie.data1} />
              <div className={cutie.data2} />
            </span>
          </h1>
          <p className={styles.description}>
            Alicorn 与其它启动器不一样，我们拥有自己的{" "}
            <span className={styles.pink}>P2P 虚拟局域网。</span>
            <br />
            无论是一两个世界，还是成千上万个，我们都有办法在它们之间搭上桥梁。
            <br />
            专享、安全、快速。
            <br />
            <br />
            据说通过 6 个人可以找到世界上任何一个人……
            <br />
            那么通过 6 位代码，也是一样的。
            <br />
            出发，到世界各处。
            <br />
            <br />
            <a
              href="https://zh.wikipedia.org/wiki/%E5%B0%8D%E7%AD%89%E7%B6%B2%E8%B7%AF"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; 了解 P2P 技术
            </a>
            <br />
            <a
              href="https://zh.wikipedia.org/wiki/%E8%99%9A%E6%8B%9F%E5%B1%80%E5%9F%9F%E7%BD%91"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; 了解虚拟局域网技术
            </a>
          </p>
        </span>

        <span className={styles.right}>
          <h1 className={styles.title}>
            <span
              className={styles.imglike}
              style={{
                lineHeight: "1.5em",
              }}
            >
              <span>lwjgl-3.2.2.jar</span>
              <br />
              <span style={{ color: "gray" }}>&rarr; lwjgl-3.2.2.jar</span>
              <br />
              <span style={{ color: "gray" }}>&rarr; lwjgl-3.2.2.jar</span>
              <br />
              <span style={{ color: "gray" }}>&rarr; lwjgl-3.2.2.jar</span>
              <br />
              <span>fabric-0.11.6-1.17.1.jar</span>
              <br />
              <span style={{ color: "gray" }}>
                &rarr; fabric-0.11.6-1.17.1.jar
              </span>
              <br />
              <span style={{ color: "gray" }}>
                &rarr; fabric-0.11.6-1.17.1.jar
              </span>
              <br />
            </span>
            链接，链接，符号链接。
          </h1>
          <p className={styles.description}>
            <span className={styles.pink}>ASC 文件共享</span>容器是 Alicorn
            处理大量相同文件的必杀技。
            <br />
            当存储大量相同的文件时，ASC 容器将创建符号链接以复用它们。
            <br />
            这项功能是自动的，只需要把容器设置为 ASC 宗卷。
            <br />
            <br />
            稳定性高，而且兼容所有平台。
            <br />
            符号，一块指路牌。
            <br />
            <br />
            <a
              href="https://zh.wikipedia.org/wiki/%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; 了解符号链接
            </a>
            <br />
          </p>
        </span>

        <span className={styles.left} id="perf">
          <h1 className={styles.title}>
            Node.js 性能无极限
            <span className={styles.facts} style={{ fontWeight: "lighter" }}>
              &#11041;JS
            </span>
          </h1>
          <p className={styles.description}>
            Chromium，一个来自 庞大工程师团队的杰作。
            <br />
            Node，一个灵活而快速的底层交互 JS 运行时。
            <br />
            你可以理解
            <span className={styles.pink}>
              <abbr title="Chromium">世界上最强大的浏览器</abbr>
            </span>
            是个什么概念……
            <br />
            也可以理解
            <span className={styles.pink}>
              <abbr title="Node.js">开辟 JS 的新时代</abbr>
            </span>
            是个什么概念……
            <br />
            而当这两种力量结合到一起，再加上性能优化方案……
            <br />
            <br />
            等待你的，就只有一声惊叹。
            <br />
            JS，现在更强大。
            <br />
            <br />
            <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
              &rarr; 了解 Node.js
            </a>
            <br />
            <a
              href="https://www.chromium.org/"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; 了解 Chromium
            </a>
            <br />
            <a href="https://electronjs.org/" target="_blank" rel="noreferrer">
              &rarr; 了解 Electron
            </a>
          </p>
        </span>

        <span className={styles.left}>
          <h1 className={styles.title}>
            快速启动，现在更快。
            <span className={styles.facts} style={{ fontWeight: "lighter" }}>
              8s
            </span>
          </h1>
          <p className={styles.description}>
            &rarr; 这是在使用较快的第三方验证的情况下，二次启动完整的 1.17.1
            Fabric 时<span className={styles.pink}>消耗的平均时间</span>。
            <br />
            若使用本地帐户，此时间可能缩减到{" "}
            <span className={styles.pink}>3s</span> 之内。
            <br />
            做到这一切的秘诀只有两点：Node 的强大 IO 以及 Alicorn
            的高效处理方案。
            <br />
            <br />
            即点即用，现在已经不再是梦想。
            <br />
            启动，数秒见高下。
          </p>
        </span>

        <span className={styles.left}>
          <h1 className={styles.title}>
            从空文件夹到新的世界
            <span className={styles.facts} style={{ fontWeight: "lighter" }}>
              35s
            </span>
          </h1>
          <p className={styles.description}>
            &rarr; 这是从一个空白文件夹下载{" "}
            <span className={styles.pink}>1.17.1 的所有必须文件并启动</span>
            的最短时间。
            <br />
            若在性能较好的硬盘上运行，速度能进一步提升。上限取决于
            <span className={styles.pink}>硬件</span>而不是 Alicorn。
            <br />
            <br />
            别忘了这只是开始！还有 ASC，ReadyBoom……
            <br />
            速度，上限作下限。
          </p>
        </span>

        <span className={styles.left}>
          <h1 className={styles.title}>
            滚滚数据东逝水&nbsp;&nbsp;
            <span className={styles.facts} style={{ fontWeight: "lighter" }}>
              50+
            </span>
          </h1>
          <p className={styles.description}>
            &rarr; 这是 MODX{" "}
            <span className={styles.pink}>每秒平均扫描的 Mod 数量</span>。
            <br />
            得益于事件驱动的流读取机制，Mod 文件读取极快。
            <br />
            <br />
            再加上原生的高性能 JSON 和 TOML 解析……
            <br />
            扫描，比声音更快。
          </p>
        </span>

        <span className={styles.left} id="srvc">
          <h1 className={styles.title}>
            玩耍、聊天、解决 Bug
            <span className={styles.facts} style={{ fontWeight: "lighter" }}>
              DS
            </span>
          </h1>
          <p className={styles.description}>
            Alicorn 的开发人员通常使用{" "}
            <span className={styles.pink}>Discord</span> 解决问题。
            <br />
            我们也在这里讨论、开发、优化。有时不仅仅是启动器相关的问题，这里可以讨论很多……
            <br />
            闲谈生活，分享乐趣，倾诉烦恼……
            <br />
            <br />
            你说，我们一起听。
            <br />
            <br />
            <a
              href="https://discord.gg/csGgQgXhZk"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; 加入我们的 Discord
            </a>
          </p>
        </span>

        <span className={styles.left}>
          <h1 className={styles.title}>
            漏洞修复全覆盖
            <span className={styles.facts} style={{ fontWeight: "lighter" }}>
              100%
            </span>
          </h1>
          <p className={styles.description}>
            我们会修复你所反馈的
            <span className={styles.pink}>每一个</span>漏洞或问题。
            <br />
            我们也会经常进行质量测试来发现和清除 Bug。
            <br />
            有求必应，有错必改。
            <br />
            <br />
            问题，一定要解决。
            <br />
            <br />
            <a
              href="https://github.com/Andy-K-Sparklight/Alicorn/issues/new"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; 反馈问题或提供建议
            </a>
          </p>
        </span>

        <span className={styles.left}>
          <h1 className={styles.title}>
            长期支持，永远至永远
            <span className={styles.facts} style={{ fontWeight: "lighter" }}>
              LTS
            </span>
          </h1>
          <p className={styles.description}>
            <b>只要还有一名用户在使用 Alicorn，我们就会继续支持。</b>
            <br />
            <b>只要还有一位开发者留下，Alicorn 项目就不会终止。</b>
            <br />
            我们不会停下，我们会不断改进升级。
            <br />
            一句很土但很合适的话：
            <br />
            <b>你的满意，是我们前进的动力！</b>
            <br />
            <br />
            支持，永远至永远。
            <br />
            <br />
            <a
              href="https://github.com/Andy-K-Sparklight/Alicorn"
              target="_blank"
              rel="noreferrer"
            >
              &rarr; Alicorn 项目主页
            </a>
          </p>
        </span>

        <h1 style={{ textAlign: "center", fontSize: "4rem" }}>出发吧！</h1>
        <div style={{ textAlign: "center", width: "100%" }}>
          <p className={styles.description} style={{ maxWidth: "unset" }}>
            这就是全部了。感谢阅读。
            <br />
            别再犹豫，现在继续！
            <br />
            <br />
            <Link href="/get" passHref>
              <a>&rarr; 下载 Alicorn</a>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Explore;
