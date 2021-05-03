import Card from './Card'

const CardList = (props) => {
    return (
        < div  className = "card-list">
          {
              props.arrayList.map(({name,id,email})=>{
                  return   <Card key={id} id={id} name={name} email={email}/>
              })
          }
        </ div>
    );
}

export default CardList;
