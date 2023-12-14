import { graphql, useFragment } from "react-relay";

const repositoryNameFragment = graphql`
  fragment RepositoryName_fragment on Repository {
    nameWithOwner
  }
`;

const RepositoryName = ({ fragmentRef }) => {
  const data = useFragment(repositoryNameFragment, fragmentRef);
  return (
    <div>
      <h1
      className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate"
      >{data.nameWithOwner}</h1>
    </div>
  )
};

export default RepositoryName;
