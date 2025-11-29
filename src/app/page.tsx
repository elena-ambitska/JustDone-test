import styles from "./page.module.css";
import {meta} from "@/app/meta";
import {Metadata} from "next";
import H1 from "@/app/_ui/H1";

export async function generateMetadata (): Promise<Metadata> {
    const metaData =  meta;

  return {
      title: metaData.title,
      description: metaData.description,
      keywords: metaData.keywords,
      robots: {
          index: true,
          follow: true
      }
  };
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <H1>
              AI Text Paraphraser by JustDone
          </H1>
      </main>
    </div>
  );
}
