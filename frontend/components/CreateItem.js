import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import ItemForm from "./ItemForm";

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $image: String
    $largeImage: String
    $price: Int!
  ) {
    createItem(
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
      price: $price
    ) {
      id
    }
  }
`;

export default () => (
  <Mutation mutation={CREATE_ITEM_MUTATION}>
    {(addTodo, { loading, error }) => (
      <ItemForm
        onSubmit={(variables, { setSubmitting }) => {
          addTodo({ variables }).then(({ data: { createItem: { id } } }) => {
            setSubmitting(false);
            Router.push({ pathname: "/item", query: { id } });
          });
        }}
        loading={loading}
        error={error}
      />
    )}
  </Mutation>
);
