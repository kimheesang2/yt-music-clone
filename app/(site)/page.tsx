import { sleep } from '@/lib/utils';
import React from 'react';

const page = async () => {
  /* console.log("before RootLayout sleep...");
  await sleep(4000);
  console.log("after RootLayout sleep..."); */
  return <div className='min-h-[600px]' >Home page</div>
};

export default page
