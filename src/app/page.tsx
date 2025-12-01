import {meta} from "@/app/meta";
import {Metadata} from "next";
import ParaphraserHeader from "@/components/ParaphraserHeader";
import ParaphraserBody from "@/components/ParaphraserBody";
import HumanizerLanding from "@/components";

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
      <HumanizerLanding>
          <ParaphraserHeader />
          <ParaphraserBody/>
      </HumanizerLanding>
  );
}
