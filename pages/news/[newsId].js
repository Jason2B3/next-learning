import { useRouter } from "next/router"; // custom hook from Next team

function DetailPage() {
  const router = useRouter();
  console.log(router)
  return <h1>The Detail Page with a dynamic path of: {router.query.newsId}</h1>;
}
export default DetailPage;
