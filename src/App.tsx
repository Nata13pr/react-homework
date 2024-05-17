import { FC} from "react";
import {useForm} from 'react-hook-form';
import  {userValidator} from './validators/user.validator'
import {joiResolver} from "@hookform/resolvers/joi";

interface IFormProps {
    username: string,
    age:number,
    password: string
}

const App: FC=()=> {
    // @ts-ignore
    let {register,handleSubmit,formState:{
        errors
    }}=useForm<IFormProps>({mode:'all',resolver:joiResolver(userValidator)});

    const save=(formValues:IFormProps)=>{
        console.log(formValues)
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit(save)}>
                <input
                    type="text"
                    {...register('username')}
                />
                {
                    errors.username && <span>{errors.username.message}</span>
                }
                {/*Сергій сказав,що користуватись ми цим варіантом не будемо*/}
                {/*<input*/}
                {/*    type="text"*/}
                {/*    {...register('username',{*/}
                {/*        required:{*/}
                {/*            value:true,*/}
                {/*            message:'this field is required'*/}
                {/*        },*/}
                {/*        maxLength:{value:10,message:'max length is 10'}*/}
                {/*    })}*/}
                {/*/>*/}
                {/*{errors.username && <span>{errors.username.message}</span>}*/}
                <input
                    type="text"
                    {...register('age')}
                />
                {errors.age && <span>{errors.age.message}</span>}
                <input
                    type="text"
                    {...register('password')}
                />
                <button>Save</button>
            </form>
        </div>
    );
}

export default App;