import React, { Component } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Error from "./ErrorMessage";
import Textarea from "react-textarea-autosize";

import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";

export const TextareaField = ({ field }) => <Textarea {...field} />;

export const FileuploadField = ({ form: { setFieldValue } }) => (
  <input
    onChange={async e => {
      const files = e.target.files;
      const body = new FormData();
      body.append("file", files[0]);
      body.append("upload_preset", "sickfits");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/genco/image/upload",
        { method: "POST", body }
      );
      const file = await res.json();
      setFieldValue("image", file.secure_url);
      setFieldValue("largeImage", file.eager[0].secure_url);
    }}
    type="file"
  />
);

const ItemForm = ({ onSubmit, value, loading, error }) => (
  <Formik initialValues={value} onSubmit={onSubmit}>
    {({ values, touched, errors, handleSubmit, isSubmitting }) => {
      return (
        <Form onSubmit={handleSubmit}>
          <Error error={error} />
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}

          <h2>Sell an item</h2>
          <fieldset disabled={isSubmitting} aria-busy={isSubmitting}>
            {values.image && <img src={values.image} alt="" />}
            <label htmlFor="image">
              Image
              <Field component={FileuploadField} name="image" required />
            </label>
            <label htmlFor="title">
              Title
              <Field type="text" name="title" required />
            </label>

            <label htmlFor="price">
              Price in cents
              <Field type="number" name="price" required />
            </label>

            <label htmlFor="description">
              Description
              <Field component={TextareaField} name="description" required />
            </label>

            <button type="submit">
              {values.id ? "Update" : "Create"} Item
            </button>
          </fieldset>
        </Form>
      );
    }}
  </Formik>
);

export default ItemForm;
