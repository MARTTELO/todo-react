function AnotherComponent (){

    const handleClick = () =>{
        console.log('Clicou no botão')
    }
    

    return (
        <div>
            <h2>
            Segundo component
            </h2>
        <button onClick={handleClick}>Evento de CLick</button>
        <br/>
        <hr />
        <br/>
        <button onClick={ () => console.log('Teste evento inline')}>Evento direto no elemento</button>
        </div>
      
    )
}

export default AnotherComponent;