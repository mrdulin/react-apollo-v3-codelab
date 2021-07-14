import React from 'react';
import * as Icons from './icons';
import type { IconType } from './icons';

const Icon = ({ icon, ...props }: { icon: keyof IconType }) => {
  const Icon = Icons[icon];
  return <Icon {...props} />;
};

function Test() {
  return <Icon icon="cycle"></Icon>;
}
