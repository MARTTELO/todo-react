import { useState } from 'react';


const Hooks = () => {

    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(idade);

    const changeAge = () =>{
        idade+=1
        console.log(idade)
    }

    const newAge = () => {
        setNovaIdade(idade += 1)
    }
    return (
        <div>
            <p> Idade: {idade}</p>
            <button onClick={changeAge}>Aumentar Idade</button>
            <p> Idade: {novaIdade}</p>
            <button onClick={newAge}>Alterar Idade Idade</button>

        </div>
    )
}

export default Hooks