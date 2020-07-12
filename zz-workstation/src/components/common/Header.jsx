import React, { useContext } from 'react'

import { Alert, Badge } from 'react-bootstrap'
import SimpleContext from '../../context/SimpleContext';


const Header = () => {

  const context = useContext(SimpleContext)

  let badgeStyle = "";

  if (context.state.persons.length >= 3) badgeStyle = "success";
  if (context.state.persons.length <= 2) badgeStyle = "warning";
  if (context.state.persons.length <= 1) badgeStyle = "danger";
  return (
    // <SimpleContext.Consumer >
    //   {
    //     context => (
    <div>
      <Alert variant="info">
        <h2>{context.state.appTitle}</h2>
      </Alert>
      <Alert variant="light">
        تعداد اشخاص{" "}
        <Badge pill variant={badgeStyle}>
          {context.state.persons.length}
        </Badge>{" "}
                    نفر می باشد
               </Alert>
    </div>
    //     )
    //   }
    // </SimpleContext.Consumer>
  );
}

export default Header;