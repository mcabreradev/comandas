import React from 'react';
import { Box, Container } from 'bloomer';

function Main() {

  return (
    <div className="main has-text-grey-dark">
        <Box>
        <div class="control has-icons-right">
          <input className="input is-medium" type="text" placeholder="Buscar Producto" />
          <span class="icon is-right">
            <i class="fas fa-search"></i>
          </span>
        </div>
        </Box>
        <Container>
        <p>
          hola :)
        </p>
        </Container>
    </div>
  );
}

export default Main;
