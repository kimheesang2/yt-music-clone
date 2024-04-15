import PagePadding from '@/components/PagePadding'
import React from 'react'
import Category from "./components/Category";
import { dummyGenreList, getAllPlaylist, getSongListTop10 } from '@/lib/dommyData';
import PlayListCarousel from '@/components/PlayListCarousel';
import SongListCarousel from '@/components/SongListCarousel';
import GenreListCarousel from '@/components/GenreListCarousel';


const page = async () => {
  /* const playlistArray = await getAllPlaylist() */
  /* const SongListTop10 = await getSongListTop10(); */

  const [playlistArray, SongListTop10] = await Promise.all([getAllPlaylist(),getSongListTop10()]);

  return (
    <PagePadding>
      <div className='mt-4'></div>
      <Category/>
      <div className='mt-20'></div>
    <PlayListCarousel playlistArray={playlistArray} title="새 앨범 및 싱글" />
      <div className='mt-20'></div>
    <SongListCarousel SongListTop10={SongListTop10} title="인기곡" />
    <div className='mt-20'></div>
    <GenreListCarousel genreList ={dummyGenreList} title="분위기 및 장르"/>
    <div className='mt-20'></div>
    <div className='mt-20'></div>
    </PagePadding>
  );
};

export default page;
