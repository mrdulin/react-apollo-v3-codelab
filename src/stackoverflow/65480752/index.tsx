import React from "react";
import { request } from "graphql-request";
import useSWR from "swr";

const fetcher = (query, variables) => {
  console.log(query, variables);
  return request(`https://graphql-pokemon.now.sh`, query, variables);
};
export default function Example() {
  const variables = { code: 14 };
  const { data, error } = useSWR(
    [
      `query GET_DATA($code: String!) {
          getRegionsByCode(code: $code) {
            code
            name
          }
        }`,
      variables,
    ],
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
