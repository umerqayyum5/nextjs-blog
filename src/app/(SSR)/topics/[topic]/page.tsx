import { UnsplashImage } from "@/app/models/unsplash-image";
import Image from "next/image";
import Styles from "./TopicPage.module.css";
import { Metadata } from "next";

interface pageprops {
  params: { topic: string };
  // searchParams: {[key: string]: string | string[] | undefined},
}

//  
export function generateStaticParams() {
  return ["health", "coding", "phones"].map((topic) => ({ topic }));
}
export function generateMetadata({ params: { topic } }: pageprops): Metadata {
  return {
    title: topic + "Gallery",
  };
}

export default async function Page({ params: { topic } }: pageprops) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=FRiqqBBhUSQsdBLl-R338QYQNWF37aVUfUrGY_U4JLs`
  );
  const images: UnsplashImage[] = await response.json();
  return (
    <div className="container">
      <h1> {topic}</h1>
      <div className="row">
        {images.map((image: UnsplashImage) => {
          return (
            <div className="col-md-4">
              <Image
                src={image.urls.raw}
                alt={image.description}
                width={250}
                height={250}
                key={image.urls.raw}
                className={Styles.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
