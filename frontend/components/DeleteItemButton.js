import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";

import { ALL_ITEMS_QUERY } from "./Items";

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const DeleteItemButton = ({ deleteItem, children }) => {
  return (
    <button
      onClick={() => {
        if (confirm("Are you sure you want to delete this item?")) deleteItem();
      }}
    >
      {children}
    </button>
  );
};

export default ({ id, ...props }) => (
  <Mutation
    mutation={DELETE_ITEM_MUTATION}
    variables={{ id }}
    update={(cache, payload) => {
      const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
      data.items = data.items.filter(
        item => item.id !== payload.data.deleteItem.id
      );
      cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
    }}
  >
    {(deleteItem, { loading, error }) => (
      <DeleteItemButton deleteItem={deleteItem} {...props} />
    )}
  </Mutation>
);
