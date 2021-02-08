import React from "react";
import { Admin, Resource } from "react-admin";

import dataProvider from "./dataProvider";
import TimelineList from "./components/TimelineList";
import TimelineCreate from "./components/TimelineCreate";
import TimelineEdit from "./components/TimelineEdit";
import ChaptersList from "./components/ChaptersList";
import ChaptersEdit from "./components/ChaptersEdit";
import ChaptersCreate from "./components/ChaptersCreate";
import ThirdChapterList from "./components/ThirdChapterList";
import ThirdChapterEdit from "./components/ThirdChapterEdit";
import ThirdChapterCreate from "./components/ThirdChapterCreate";

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="timeline" list={TimelineList} edit={TimelineEdit} />
      <Resource
        name="chapters"
        list={ChaptersList}
        edit={ChaptersEdit}
        create={ChaptersCreate}
      />
      <Resource
        name="thirdchapters"
        list={ThirdChapterList}
        edit={ThirdChapterEdit}
        create={ThirdChapterCreate}
      />
    </Admin>
  );
};

export default App;
