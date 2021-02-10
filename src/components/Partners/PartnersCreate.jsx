import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const PartnersCreate = (props) => {
  return (
    <Create title="Ajouter un paragraphe" {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="url" />
      </SimpleForm>
    </Create>
  );
};

export default PartnersCreate;
