import React from 'react'
import './Login.css'
import {Button} from "@material-ui/core"
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider'
import {actionTypes}  from './reducer'
function Login() {
const [state,dispatch] =  useStateValue()


    const signin  = () => {
auth.signInWithPopup(provider)

.then(result => {
    dispatch({
        type: actionTypes.SET_USER,
        user: result.user
    })
    console.log(result);
}).catch(err => alert(err))
    }
    return (
        <div className="login">
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" / >
                    <img src="https://seeklogo.net/wp-content/uploads/2016/09/facebook-logo-preview-400x400.png"  />
            </div>
<Button   type="submit" variant="" color='primary' onClick={signin} >SIGN IN</Button>
        </div>
    )
}

export default Login
