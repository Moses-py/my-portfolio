import React from 'react';
import { Btn } from './style';

export const Button = ({title}) => {
  return <Btn animate={{opacity: 1}} initial={{opacity: 0}} transition={{delay: 1}} >{title}</Btn>;
}

