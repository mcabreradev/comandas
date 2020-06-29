import React from 'react';
import { Icon } from 'bloomer';

function Sidebar() {

  return (
    <div class="sidebar is-collapsed">
      {/* <h1>Sidebar</h1> */}
      <section class="section">
        <ul>
          <li><Icon className="fa fa-home fa-lg" /></li>
          <li><Icon className="fa fa-home fa-lg" /></li>
          <li><Icon className="fa fa-home fa-lg" /></li>
          <li><Icon className="fa fa-home fa-lg" /></li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
