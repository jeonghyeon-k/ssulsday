import React from "react";


export default function App (props) {
  return (
   <h1>do not use app before load page</h1>
  );
};

import InputBox from "./views/components/InputBox/InputBox";
import Ellipse from "./views/components/Ellipse/Ellipse";
import PlaceCard from "./views/components/PlaceCard/PlaceCard";
import TapButton from "./views/components/TapButton/TapButton";

export default function App(props) {
  return (
    <div>
      <InputBox />
      <Ellipse />
      <PlaceCard spot='강남역' />
      <TapButton />
    </div>
  );
};

