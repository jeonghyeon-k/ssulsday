import React, { useState } from "react";
import { PostModal, ShareModal } from "./index";

export default function Modal(props) {
  const [Type, setType] = useState(props.type);
  const [open, setOpen] = useState(false);
  console.log(Type);
  if (Type == "share") {
    setType(true);
  }
  if (Type == "post") {
    setType(false);
  }
  return <div>{open && (Type ?  <ShareModal /> : <PostModal />)}</div>;
}
