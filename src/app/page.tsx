import { Suspense } from "react";
import { serverOnlyFetch } from "./server-only-fetch";
import { ClientComponent } from "./client";

export default async function Home() {
  const promise = serverOnlyFetch();

  return (
    <div>
      <p>
        This is a server component inside a client component. How do i know?
        This component is async.
      </p>

      <p>The below data is fetched from a server only fetch function.</p>

      <Suspense fallback="Loading">
        <ClientComponent promise={promise} />
      </Suspense>

      <p>
        If you see a &quot;Loading&quot; flash and then the list, it means RSC,
        and Streaming both are working fine even though the root layout is
        client component. If you check this page&apos;s source, you&apos;ll
        notice that SSR is working too.
      </p>
    </div>
  );
}
