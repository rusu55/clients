'use client';

import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import { MenuItem } from "./MenuItem";
import { SideBarLinks } from '@/constants';

export const SideNav = () => {
  let isTableMid = useMediaQuery({query: "(max-width: 768px"});

  useEffect(() =>{
      if(isTableMid) setOpen(false)
      else setOpen(true)
  }, [isTableMid])
  
  const [open, setOpen] = useState(isTableMid ? false: true)
  return (
    <div>
      SideNav
    </div>
  )
}

