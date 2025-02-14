import { UnsplashImage } from "@/models/unplash-image";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata: Metadata = {
  title: "Static Fetching - NextJS Image Gallery",
};

export default async function Page() {

  const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY);
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height

  return (
    <div className="d-flex flex-column align-items-center">

      <Alert>This page <strong>fetches and caches data at build time.</strong> Even though the Unsplash API always returns a new image, we see the same impage after refreshing the page until we compile the project again.</Alert>
      <Image 
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mv-100 h-100"
      />
      by <Link href={"/user/" + image.user.username}>{image.user.username}</Link>
    </div>
  )
}