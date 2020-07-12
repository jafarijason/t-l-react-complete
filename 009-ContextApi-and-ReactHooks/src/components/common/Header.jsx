import React, { useContext } from 'react'

import { Alert, Badge } from 'react-bootstrap'
import SimpleContext from '../../context/SimpleContext';


const Header = ({ appTitle }) => {

  const context = useContext(SimpleContext)

  let badgeStyle = "";

  if (context.persons.length >= 3) badgeStyle = "success";
  if (context.persons.length <= 2) badgeStyle = "warning";
  if (context.persons.length <= 1) badgeStyle = "danger";
  return (
    <div>
      <Alert variant="info">
        <h2>{appTitle}</h2>
      </Alert>
      <Alert variant="light">
        تعداد اشخاص{" "}
        <Badge pill variant={badgeStyle}>
          {context.persons.length}
        </Badge>{" "}
                    نفر می باشد
      </Alert>
    </div>
  );
}

export default Header;