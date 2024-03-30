import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Video from "./Pages/Video/Video";
import Home from "./Pages/Home/Home";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { sidebarAtom } from "./atoms";
const App = () => {
  const sidebar = useRecoilValue(sidebarAtom);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
