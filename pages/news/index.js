import Link from "next/link";
import { useRouter } from "next/router";

export default function News() {
  const reports = [
    { id: 1, story: "bank robbery" },
    { id: 2, story: "Lotto win" },
  ];
  const router = useRouter();
  const btnHandler = () => router.replace("/blog");
  return (
    <div>
      <h1>The "news" path HomePage</h1>
      <button onClick={btnHandler}>Press me to go to the /blog page</button>
    </div>
  ); // produces links to /news/1 and /news/2
}
