import React from "react";
import { useRouter } from "next/router";

export default function blogID() {
  const router= useRouter();
  console.log(router)
  console.log(router.query)
  return <div>/blog catch-all page</div>;
}
