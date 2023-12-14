"use client";

import { Suspense } from "react";
import { SerializablePreloadedQuery } from "../src/relay/loadSerializableQuery";
import MainViewQueryNode, {
  MainViewQuery,
} from "./__generated__/MainViewQuery.graphql";
import { getCurrentEnvironment } from "../src/relay/environment";
import {
  RelayEnvironmentProvider,
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
} from "react-relay";
import useSerializablePreloadedQuery from "../src/relay/useSerializablePreloadedQuery";
import Link from "next/link";
import RepositoryName from "./RepositoryName";
import RepositoryDetails from "./RepositoryDetails";
import CustomLoading from "./CustomLoading";

const MainViewClientComponent = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof MainViewQueryNode,
    MainViewQuery
  >;
}) => {
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
  const data = usePreloadedQuery(
    graphql`
      query MainViewQuery($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
          ...RepositoryName_fragment
          ...RepositoryDetails_fragment
        }
      }
    `,
    props.queryRef
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <p className="text-2xl text-gray-600 mb-10 max-w-xl text-center">
        The following data has been fetched from GitHub by using GraphQL and
        Relay. The data is used to display the name, description and link to a
        GitHub repository.
      </p>

      <div className="border border-gray-200 rounded-lg p-4 max-w-xl w-full mx-auto">
        <RepositoryName fragmentRef={data.repository} />
        <RepositoryDetails fragmentRef={data.repository} />
      </div>
    </div>
  );
}

export default MainViewClientComponent;
