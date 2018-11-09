import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import ItemForm from "./ItemForm";

export const ITEM_QUERY = gql`
  query ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $image: String
    $largeImage: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
      price: $price
    ) {
      id
      title
      description
      image
      largeImage
      price
    }
  }
`;

export default ({ query: { id } }) => (
  <Query query={ITEM_QUERY} variables={{ id }}>
    {({ loading, error, data: { item } }) => {
      console.log({ loading, error, item });
      if (loading) return "Loading...";
      if (!item) return "Not found";
      return (
        <Mutation mutation={UPDATE_ITEM_MUTATION}>
          {(updateTodo, { loading, error }) => (
            <ItemForm
              value={item}
              onSubmit={(variables, { setSubmitting }) => {
                updateTodo({ variables }).then(
                  ({
                    data: {
                      updateItem: { id },
                    },
                  }) => {
                    setSubmitting(false);
                    Router.push({ pathname: "/item", query: { id } });
                  }
                );
              }}
              loading={loading}
              error={error}
            />
          )}
        </Mutation>
      );
    }}
  </Query>
);
