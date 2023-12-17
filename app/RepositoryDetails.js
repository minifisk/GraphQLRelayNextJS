import { graphql, useFragment } from "react-relay";
import Link from "next/link";

// const repositoryDetailsFragment = graphql`
//   fragment RepositoryDetails_fragment on Repository {
//     description
//     url
//   }
// `;

const RepositoryDetails = ({ fragmentRef }) => {
  // const data = useFragment(repositoryDetailsFragment, fragmentRef);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"></h2>
      <span className="text-sm font-medium leading-5 text-gray-400">
        {/* {data.description} */}
        Details
      </span>
      <div className="flex justify-center">
        <strong>
          <Link className="text-blue-600 hover:text-blue-800" href={data.url}>
            Link
          </Link>
        </strong>
      </div>
    </div>
  );
};

export default RepositoryDetails;
