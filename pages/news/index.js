import Link from "next/link";

export default function News() {
  const reports = [
    { id: 1, story: "bank robbery" },
    { id: 2, story: "Lotto win" },
  ];
  return (
    <div>
      <h1>The "news" path HomePage</h1>
      <Link
        href={{
          pathname: "/news/[newsId]",
          query: { newsId: 1 },
        }}
      >
        1
      </Link>
    </div>
  ); // produces links to /news/1 and /news/2
}
