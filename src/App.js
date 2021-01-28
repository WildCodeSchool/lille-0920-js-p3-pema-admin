import React from "react";
import { Admin, Resource } from "react-admin";

import dataProvider from "./dataProvider";
import TimelineList from "./components/TimelineList";
import TimelineCreate from "./components/TimelineCreate";
import TimelineEdit from "./components/TimelineEdit";

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="timeline"
        list={TimelineList}
        create={TimelineCreate}
        edit={TimelineEdit}
      />
    </Admin>
  );
};

export default App;
