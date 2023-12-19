import loadSerializableQuery from "../src/relay/loadSerializableQuery";
import MainViewQueryNode, {
  MainViewQuery,
} from "./__generated__/MainViewQuery.graphql";
import MainViewClientComponent from "./MainView";



const Page = async () => {

  const preloadedQuery = await loadSerializableQuery(MainViewQueryNode, {});

  // const preloadedQuery = await loadSerializableQuery<
  //   typeof MainViewQueryNode,
  //   MainViewQuery
  // >(MainViewQueryNode.params, {
  //   owner: "minifisk",
  //   name: "comfyui_segment_anything",
  // });


  return (
    <div>
      {/* <MainViewClientComponent /> */}
      <MainViewClientComponent preloadedQuery={preloadedQuery} />

    </div>
  );
};

export default Page;

export const revalidate = 0;