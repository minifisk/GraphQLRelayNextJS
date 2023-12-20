"use client";

import { Suspense } from "react";
import { SerializablePreloadedQuery } from "../src/relay/loadSerializableQuery";
// import MainViewQueryNode, {
//   MainViewQuery,
// } from "./__generated__/MainViewQuery.graphql";
// import { getCurrentEnvironment } from "../src/relay/environment";
import environment, { getCurrentEnvironment } from "@/src/relay/environment";

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
import MainViewQueryNode, {
  MainViewQuery,
} from "./__generated__/MainViewQuery.graphql";

const MainViewClientComponent = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >;
}) => {
  // console.log('props.preloadedQuery', props.preloadedQuery)

  const environment = getCurrentEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery
  );

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<CustomLoading />}>
        <MainView queryRef={queryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

function MainView(props: { queryRef: PreloadedQuery<MainViewQuery> }) {
  const data = usePreloadedQuery(MainViewQueryNode, props.queryRef);
  console.log("data", data);

  const stringifiedData = JSON.stringify(data, null, 2);
  console.log("stringifiedData", stringifiedData);

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
