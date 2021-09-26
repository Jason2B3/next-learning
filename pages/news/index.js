import Link from "next/link";
function News() {
  return (
    <>
      <h1>The "news" path HomePage</h1>
      <ul>
        <li>
          <Link href="./news/today">Visit the news/today page!</Link>
        </li>
        <li>
          <Link href="./weather/tomorrow">
            Visit the weather/tomorrow page!
          </Link>
        </li>
      </ul>
    </>
  );
}

export default News;
