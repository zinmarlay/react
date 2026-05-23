function Item({name}){
  return <li>{name}</li>;
}

const data = [
  {id:3, name:"Bread",done:false},
  {id:2, name:"Butter",done:true},
  {id:1, name:"Banana",done:false},
];

export default function App() {
    return(
       <div>
        <h1>Hello React</h1>
        <ul>
          {data.map(item => {
            return <Item name={item.name}/>
          })}

          {data.map(item => <Item name={item.name}/>)}

          {data.map(item => (
            <Item name={item.name}/>
          ))}
        </ul>
    </div>
    );
}
