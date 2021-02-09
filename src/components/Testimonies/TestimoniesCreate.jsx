import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const TestimoniesCreate = (props) => {
  return (
    <Create title="Ajouter un paragraphe" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="text" />
      </SimpleForm>
    </Create>
  );
};

export default TestimoniesCreate;
