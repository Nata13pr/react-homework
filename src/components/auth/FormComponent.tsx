import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import userValidator from "../../validators/user.validator";
import {IAuthDataModel} from "../../models/IAuthDataModel";
import {authService} from "../../services/auth/api.auth.service";

const FormComponent = () => {
    const [isLogIn, setIsLogIn] = useState<boolean>(false);

    const {
        register, handleSubmit, formState: {
            errors, isValid
        }
    } = useForm<IAuthDataModel>({mode: 'all', resolver: joiResolver(userValidator)})

    const logIn = async (formData: IAuthDataModel) => {
        const isLogInUser = await authService.logIn(formData);
        setIsLogIn(isLogInUser)
    }

    return (
        <div>
            <h2>Логінація</h2>
            {isLogIn ? <p>Залогінений</p> : <p>Не залогінений</p>}
            <form onSubmit={handleSubmit(logIn)}>
                <input type='text' {...register('username')}/>
                {errors.username && <span>{String(errors.username.message)}</span>}
                <input type='text' {...register('password')}/>
                {errors.password && <span>{String(errors.password.message)}</span>}
                <button>Залогінитись</button>
            </form>
        </div>
    );
};

export default FormComponent;