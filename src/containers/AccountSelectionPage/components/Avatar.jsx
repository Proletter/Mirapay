import React from 'react'
import styles from './avatar.module.css'
const Avatar=({email})=> <div ><img style={{
    height: 50,
    width: 50,
    borderRadius: "100%"
}} src={`https://avatars.dicebear.com/api/initials/${email}.svg`}/></div>
export default Avatar