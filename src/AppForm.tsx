import {FormEvent, useState, FC} from "react";

interface IFormProps {
    username: string,
    password: string
}

const AppForm: FC=()=> {
    const [formState, setFormState] = useState<IFormProps>({
        username: "",
        password: "",
    });
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password,
        };
        console.log(user);
    };

    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        let input = e.currentTarget;
        setFormState({...formState, [input.name]: input.value});
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name={"username"}
                    value={formState.username}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name={"password"}
                    value={formState.password}
                    onChange={handleChange}
                />
                <button>Save</button>
            </form>
        </div>
    );
}
export default  AppForm;