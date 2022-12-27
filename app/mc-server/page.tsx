import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./extra.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          IKGI Servers
          {/* <code className={styles.code}></code> */}
        </p>
      </div>

      <div className={styles.center}>
        <div className={styles.thirteen}>
          <Link href="/">
            <Image
              src="/KGvector.svg"
              alt="KG"
              width={40}
              height={31}
              priority
            />
          </Link>
        </div>
      </div>
      {/* Make the h tags below responsive*/}

      <div className={styles.code}>
        <h1 className={inter.className}>SMP Minecraft Server</h1>
      </div>
      <div className={styles.card}>
        <Link href="https://server.pro/server/24717313" target="_blank">
          <h2 className={inter.className}>ikgi.mcserver.us</h2>
        </Link>
      </div>
      <div className={styles.code}>
        <h3 className={inter.className}>Version 1.19.3</h3>
      </div>

      <div className={styles.card}>
        <p className={inter.className}>
          Welcome to the server page for our groups SMP server! It is important
          to note that access to this server is restricted to those who have
          been granted permission through the whitelist process. To request
          access, please ensure that you are a member of the IKGI Discord
          server, which can be accessed using the link provided below. Once you
          have joined the Discord server, please acquire the designated
          Minecraft role and then contact Voxel#1111 in the Minecraft Chat to
          submit a request for access, including information about your
          connections to the server and any other pertinent details. We eagerly
          anticipate your involvement on the server.
        </p>
      </div>
      <div className={styles.code}>
        <Link href="/">
          <p className={inter.className}>Go back</p>
        </Link>
      </div>
    </main>
  );
}
