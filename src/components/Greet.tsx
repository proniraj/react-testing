import React, { FC } from 'react';

type Props = {
  name?: string;
};
const Greet: FC<Props> = ({ name }) => {
  if (name) {
    return <h2>Hello, {name}</h2>;
  }
  return <button>Login</button>;
};

export default Greet;
