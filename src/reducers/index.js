import {combineReducers} from 'redux';

const songReducer=()=>{
    return[
        {
            title:'No Srubs',
            duration:'4.05'
        },
        {
            title:'Macarene',
            duration:'2.05'
        },
        {
            title:'All Star',
            duration:'3.15'
        },
        {
            title:'Let me love u',
            duration:'1.23'
        },
        {
            title:'on my way',
            duration:'2.40'
        },
    ];
};
const selectedSongRedcer=(selectedSong= null,action)=>{
    if(action.type==='SONG_SELECTED ')
    {
        return action.playload;
    }
    return selectedSong;
};
export default combineReducers({
    songs:songReducer,
    selectedSong:selectedSongRedcer
});