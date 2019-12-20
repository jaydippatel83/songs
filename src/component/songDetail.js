import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song})=>{
     if(!song){
         return <div >Select a song</div>
     }
     return (
         <div>
             {song.title}
         </div>,
         <div>
         {song.duration}
     </div>
     )
    
    return <div >Song Detail</div>;
}
const mapStateToProps=(state)=>{
    return {Song:state.selectedSong}
};
export default connect (mapStateToProps)(SongDetail);