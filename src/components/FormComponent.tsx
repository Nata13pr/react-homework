import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IAuthDataModel} from "../models/IAuthDataModel";
import {authService} from "../services/api.service";

const FormComponent = () => {
    const [isAuthState, setIsAuthState] = useState<boolean>(false);
    const {handleSubmit, register} = useForm<IAuthDataModel>()

    const authenticate = async (formData: IAuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth)
    }

    return (
        <div>
            <h3>Login form</h3>
            {isAuthState ? <div>ok</div> : <div>not ok</div>}
            <form onSubmit={handleSubmit(authenticate)}>
                <input type='text' {...register('username')}/>
                <input type='text' {...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default FormComponent;