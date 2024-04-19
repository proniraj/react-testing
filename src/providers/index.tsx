import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
  return <Theme>{children}</Theme>;
};

export default Providers;
