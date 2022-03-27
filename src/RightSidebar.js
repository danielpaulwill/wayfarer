import React, { useState } from "react";
import ItemsList from "./ItemsList"

function RightSidebar({ currentItems }) {

  const items = currentItems.map(item => (
    <ItemsList key={item.name} item={item}/>
    ))

  return (
    <div id="rightSidebar">
      <div className="sidebarStats">
        <h3>Items</h3>
        {items}
      </div>
    </div>
  )
};

export default RightSidebar;