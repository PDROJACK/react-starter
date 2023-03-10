import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { sendAsyncIntegrationRequest } from '../features/userinfo/userSlice';
import { auth } from '../app/firebasConfig';

function AuthPage() {

    const dispatch = useAppDispatch();

    useEffect(() => {
    
        console.log(window.location.pathname);
        const url = new URL(window.location.href)
        let code = url.searchParams.get("code")
        code = code.substring(0,code.length-3)

        // Send code to backend
        dispatch(sendAsyncIntegrationRequest({user: auth.currentUser.providerData[0], type: "INSTAGRAM", code}));
        
    }, [])
    

    return (
        <div>
        <p>Instagram Account integrated !</p>
        <p>Redirecting please wait...</p>
        </div>
    )

}

export default AuthPage