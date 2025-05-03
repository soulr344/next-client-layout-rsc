"use client";
import { use } from "react";
// notice you can import this in client component because its a "type" only import
// you can remove the "type" keyword from the import and it should work as long as its used only for types
import type { serverOnlyFetch } from "./server-only-fetch";

export const ClientComponent = ({
  promise,
}: {
  promise: ReturnType<typeof serverOnlyFetch>;
}) => {
  const data = use(promise);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.name}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};
