import { sleep } from '@/lib/utils';
import React from 'react';
import Category from "./components/Category";
import PagePadding from '@/components/PagePadding';
import PlayListCarousel from '@/components/PlayListCarousel';
import { dummyPlaylistArray } from '@/lib/dommyData';
import { UserIcon } from 'lucide-react';

const page = async () => {
  /* console.log("before RootLayout sleep...");
  await sleep(4000);
  console.log("after RootLayout sleep..."); */
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  return (
    <PagePadding>
    <div className='min-h-[600px]' >
    <div className='mt-9'></div>
    <Category />
    <div className='mt-20'></div>
    <PlayListCarousel
      playlistArray={[...dummyPlaylistArray1]}
      Thumbnail={
        <div className='w-[56px] h-[56px]'>
          <UserIcon size={"lg"}/>
        </div>
      }
      title="다시 듣기"
      subTitle='하울'
    />
    <div className='mt-20'></div>
    <PlayListCarousel
      playlistArray={[...dummyPlaylistArray]}
      title="케이시 - full Bloom"
      subTitle='새로운 앨범'
    />

    </div>
    </PagePadding>
    );
};

export default page;
