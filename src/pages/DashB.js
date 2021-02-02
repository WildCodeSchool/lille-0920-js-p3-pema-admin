import React from "react";
import { Admin, Resource } from "react-admin";

import dataProvider from "./dataProvider";
import TimelineList from "../dashboardComponents/TimelineList";
import TimelineCreate from "../dashboardComponents/TimelineCreate";
import TimelineEdit from "../dashboardComponents/TimelineEdit";

const DashB = () => {
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

export default DashB;
