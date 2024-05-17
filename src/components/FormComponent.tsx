import React, {FC, useState} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {userValidator} from "../validators/user.validator";
import {IPost} from '../models/IPost';
import {addPost} from './../services/users.api.service';
import {v4 as uuidv4} from 'uuid';

const FormComponent: FC = () => {
    const [id, setId] = useState<number>(0)
    let {register, handleSubmit, formState: {errors, isValid}} = useForm<IPost>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const save = (formValues: IPost) => {
        const id = Number(uuidv4());
        addPost({...formValues, id})
            .then((json) => console.log(json));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type={'text'} {...register('title')}/>
                {errors.title && <span>{errors.title.message}</span>}
                <input type={'text'} {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}
                <button>save</button>
            </form>
        </div>
    );
};

export default FormComponent;