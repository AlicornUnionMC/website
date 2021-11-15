import { useEffect, useState } from "react";
import { Firework } from "./Firework";
import styles from "./Magic.module.css";

export default function Magic() {
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    setAnimating(true);
    setTimeout(() => {
      setInterval(() => {
        const e = document.getElementById("cluster");
        if (e) {
          const clientRect = e.getBoundingClientRect();
          if (
            (clientRect.top > -clientRect.width &&
              clientRect.top < window.innerHeight) ||
            (clientRect.bottom > 0 && clientRect.top <= window.innerHeight)
          ) {
            new Firework(480, 420).init();
          }
        }
      }, 1500);
    }, 225);
  }, []);
  return (
    <div>
      <img
        alt="LOGO"
        src="/favicon.png"
        className={animating ? styles.pickaxe : ""}
      />
      <img
        alt="CLUSTER"
        src="/Cluster.png"
        id="cluster"
        className={animating ? styles.cluster : ""}
      />
    </div>
  );
}
