import { Query } from "react-apollo";
import { ITEM_QUERY } from "./UpdateItem";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

export const SingleItem = ({ item }) => {
  return (
    <SingleItemStyles>
      <Head>
        <title>Sick Fits | {item.title}</title>
      </Head>
      <img src={item.largeImage} alt={item.title} />
      <div className="details">
        <h2>Viewing {item.title}</h2>
        <p>{item.description}</p>
      </div>
    </SingleItemStyles>
  );
};

export default ({ id }) => (
  <Query query={ITEM_QUERY} variables={{ id }}>
    {({ loading, error, data: { item } }) => {
      console.log({ loading, error, item });
      if (loading) return "Loading...";
      if (error) return <Error error={error} />;
      if (!item) return "No item found";
      return <SingleItem item={item} />;
    }}
  </Query>
);
