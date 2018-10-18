import React from 'react';
import { 
  Dimmer, 
  Loader
} from 'semantic-ui-react'

const Spinner = () => {
  return (
    <div>
        <Dimmer active>
          <Loader indeterminate>Requesting Gyphs</Loader>
        </Dimmer>
    </div>
  );
};

export default Spinner;
