const List = () => {
    const itens = [{
        id: 1,
        name: "Marcelo"
    },{
        id: 2,
        name: "thiago"
    },{
        id: 3,
        name: "Paula"
    },{
        id:4,
        name: "Enzo"
    }]

    return (
       <div>
           {itens.map((item) => (
               <ul>
                   <li key={item.id}> {item.id} - { item.name}</li>
               </ul>
           ))}
       </div>
    )
}

export default List