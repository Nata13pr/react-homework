import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../../validators/user.validator";
import {IAuthDataModel} from "../../models/IAuthDataModel";
import {authService} from "../../services/auth/api.auth.service";
import {IAuthRegistrationDataModel} from "../../models/IAuthRegistrationDataModel";
import userRegistrationValidator from "../../validators/registration.validator";

const FormComponent = () => {
    const [isSIgnUp, setIsSIgnUp] = useState<boolean>(false);

    const {
        register, watch, handleSubmit, formState: {
            errors, isValid
        }
    } = useForm<IAuthRegistrationDataModel>({mode: 'all', resolver: joiResolver(userRegistrationValidator)})

    const logIn = async (formData: IAuthDataModel) => {
        const isLogInUser = await authService.register(formData);
        if (isLogInUser) {
            setIsSIgnUp(true);
        }
    }

    return (
        <div>
            <h2>Реєстрація</h2>
            {isSIgnUp ? <p>Зареєстрований</p> : <p>Не зареєстрований</p>}
            <form onSubmit={handleSubmit(logIn)}>
                <input type='text' {...register('username')}/>
                {errors.username && <span>{String(errors.username.message)}</span>}
                <input
                    {...register("password", {
                        required: true
                    })}
                />
                <input
                    {...register("confirm_password")}
                />
                {errors.confirm_password && <span>{String(errors.confirm_password.message)}</span>}
                <button>Зареєструватись</button>
                {errors.password && <span>{String(errors.password.message)}</span>}
            </form>
        </div>
    );
};

export default FormComponent;