"use client";

import { Suspense } from "react";
import { SerializablePreloadedQuery } from "../src/relay/loadSerializableQuery";
// import MainViewQueryNode, {
//   MainViewQuery,
// } from "./__generated__/MainViewQuery.graphql";
// import { getCurrentEnvironment } from "../src/relay/environment";
import environment from "@/src/relay/environment";

import {
  RelayEnvironmentProvider,
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useLazyLoadQuery,
} from "react-relay";
import useSerializablePreloadedQuery from "../src/relay/useSerializablePreloadedQuery";
import Link from "next/link";
import RepositoryName from "./RepositoryName";
import RepositoryDetails from "./RepositoryDetails";
import CustomLoading from "./CustomLoading";

const MainViewClientComponent = () => {
  // const MainViewClientComponent = (props: {
  //   preloadedQuery: SerializablePreloadedQuery<
  //     typeof MainViewQueryNode,
  //     MainViewQuery
  //   >;
  // }) => {
  // const environment = getCurrentEnvironment();
  // const queryRef = useSerializablePreloadedQuery(
  //   environment,
  //   props.preloadedQuery
  // );

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<CustomLoading />}>
        {/* <MainView queryRef={queryRef} /> */}
        <MainView />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};



// function MainView(props: { queryRef: PreloadedQuery<MainViewQuery> }) {
function MainView() {
  // const data = usePreloadedQuery(
  //   graphql`
  //     query MainViewQuery($owner: String!, $name: String!) {
  //       repository(owner: $owner, name: $name) {
  //         # ...RepositoryName_fragment
  //         # ...RepositoryDetails_fragment
  //       }
  //     }
  //   `,
  //   props.queryRef
  // );

  
  const BooksQuery = graphql`
    query MainViewQuery {
      booksCollection {
        edges {
          node {
            id
            name
            author
          }
        }
      }
    }
  `;

const data = useLazyLoadQuery(BooksQuery, {});

return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <p className="text-2xl text-gray-600 mb-10 max-w-xl text-center">
      Here are the books fetched from the GraphQL server:
    </p>
    <div className="border border-gray-200 rounded-lg p-4 max-w-xl w-full mx-auto">
      {data.booksCollection.edges.map(({ node }) => (
        <div key={node.id} className="mb-4">
          <p className="text-lg font-bold">{node.name}</p>
          <p>Author: {node.author}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default MainViewClientComponent;
