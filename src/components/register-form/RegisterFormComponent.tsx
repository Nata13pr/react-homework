import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {IAuthDataModel} from "../../models/IAuthDataModel";
import {userValidator} from "../../validators/user.validator";
import {authService} from "../../services/auth/api.auth.service";

const RegisterFormComponent = () => {
    const [isRegisterState, setIsRegisterState] = useState<boolean>(false);
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IAuthDataModel>({
        mode: "all",
        resolver: joiResolver(userValidator)
    })


    const registration = async (formData: IAuthDataModel) => {
        try {
            const response = await authService.register((formData));
            if (response) {
                setIsRegisterState(true);
            }

        } catch (error) {
            console.error('Registration failed', error)
            setIsRegisterState(false)
        }
    }

    return (
        <div>
            <h2>Register form</h2>
            {isRegisterState ? <div>Зареєстрований</div> : <div>Не зареєстрований</div>}
            <form onSubmit={handleSubmit(registration)}>
                <input type='text' {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}
                <input type='text' {...register('password')}/>
                {errors.password && <span>{errors.password.message}</span>}
                <button>Register</button>
            </form>
        </div>
    );
};

export default RegisterFormComponent;