import React from 'react'
import Avatar from './Avatar'
import  {useSelector, useDispatch} from 'react-redux'
import styles from './avatar.module.css'
import { signInUser } from '../../../utils/apiHandlers/signIn'
import { setSignedInAccountNumber } from '../../../redux/features/user/userSlice'
import { useHistory } from 'react-router-dom'

const AccountSelectionProfile=({name, accountnumber})=>{
    const {password,email} = useSelector(state=>state.user)
    const history = useHistory()
    const dispatch = useDispatch()

  
  
    async function signInUserWithSelectedAccount(){
        
        const data = {
            email: email,
            password:password,
            account_number:accountnumber
        }
        const res = await signInUser(JSON.stringify(data))
        if(res.data.status){
            dispatch(setSignedInAccountNumber(accountnumber))
            history.push('/pages')


        }
        
    }

    return(
        <div onClick={signInUserWithSelectedAccount} className={styles.account}>
            <div className={styles.avatar}>
            <div className={styles.icon} >

           <Avatar email={name}/>
            </div>
           <div>
           <p>{name}</p>
            <p>{accountnumber}</p>
            </div>
            </div>
            <div>
            <hr className={styles.hr_color}/>

            </div>

        </div>

    )
}

export default AccountSelectionProfile