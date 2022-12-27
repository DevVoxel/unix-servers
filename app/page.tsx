import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Web Service for IKGI Servers.
          {/* <code className={styles.code}></code> */}
        </p>
      </div>

      <div className={styles.center}>
        <div className={styles.thirteen}>
          <Image src="/KGvector.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a href="mc-server" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            MC Server Page <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Take a look at our own Minecraft SMP Server page.
          </p>
        </a>

        <a href="" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            Our Servers & Staff<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Take a look at our servers and different staff members! (Inactive)
          </p>
        </a>

        <a
          href="https://discord.com/invite/cwZxs6JapP"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Discord <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Join our discord server and become apart of the community.
          </p>
        </a>
      </div>
    </main>
  );
}
