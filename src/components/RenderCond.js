export default function RenderCond({x}){
    
    return (
        <div>
            { x > 5 &&  <p>X é maior que 5</p>} {/* if simples, componente é executado somente de x > 5*/}
            { x > 5 ? <p> x é maior</p> : <p> x é menor</p>} {/* if ternario */}
            
        </div>
    )
}