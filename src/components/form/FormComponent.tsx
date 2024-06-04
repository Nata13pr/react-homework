import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {IAuthDataModel} from "../../models/IAuthDataModel";
import {userValidator} from "../../validators/user.validator";
import {authService} from "../../services/auth/api.auth.service";

const FormComponent = () => {
    const [isAuthState, setIsAuthState] = useState<boolean>(false)
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IAuthDataModel>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    })

    const authentication = async (formData: IAuthDataModel) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth)
    }

    return (
        <div>
            <h2>Login form</h2>
            {isAuthState ? <div>Залогінений</div> : <div>Не залогінений</div>}
            <form onSubmit={handleSubmit(authentication)}>
                <input type='text' {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}
                <input type='text' {...register('password')}/>
                {errors.password && <span>{errors.password.message}</span>}
                <button>Register</button>
            </form>
        </div>
    );
};

export default FormComponent;