
import { recommentMusic, newSong } from './Home'
import { hotSearch, searchResult } from './Search'
import { getSongById, getLyricById } from './Play'


export const recommentMusicAPI = recommentMusic
export const newSongAPI = newSong
export const hotSearchAPI = hotSearch
export const searchResultAPI = searchResult
export const getSongByIdAPI = getSongById // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById // 歌曲 - 歌词数据
