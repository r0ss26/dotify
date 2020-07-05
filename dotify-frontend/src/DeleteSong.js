import React from 'react'
import axios from 'axios'

const DeleteSong = ({songId, onDelete}) => {

    function deleteSong(){
        axios.delete(`http://localhost:3000/songs/${songId}`)
    }

    return (
        <button onClick={onDelete}>X</button>
    )
}

export default DeleteSong