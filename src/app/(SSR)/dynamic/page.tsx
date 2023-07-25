import { UnsplashImage } from "../../models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "../../components/bootstrap";

export const metadata = {
  title: "Dynamic Fetching - Images",
};
export const revalidate = 0;

export default async function Page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=FRiqqBBhUSQsdBLl-R338QYQNWF37aVUfUrGY_U4JLs",
    {
      //   cache: "no-cache",
      //   next: { revalidate: 0 },
    }
  );

  const image: UnsplashImage = await response.json();
  console.log(image);
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        Dynamic . This fetch data from the Unsplash APi . It fetch new image on
        every page load...
      </Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        className="rounded shadow mw-100 h-100"
        alt={image.description}
      />
      by{" "}
      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
