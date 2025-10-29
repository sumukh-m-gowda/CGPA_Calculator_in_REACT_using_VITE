const people = [{
    id: 0,
    name : 'arrray',
    sec : 'a'
},{
    id: 1,
    name : 'barrre',
    sec : 'b' 
},{
    id: 2,
    name : 'carrre',
    sec : 'c' 
},{
    id: 3,
    name : 'darrre',
    sec : 'd' 
}];
function geturl(person) {
    return (
        person.name + person.id + person.sec
    );
}

export default function List() {
    const list = people.map(person =>
        <div key={person.id}>
            <p>'student name : {person.name} and his section: {person.sec}</p>
            
        </div>
    );
    return (
        <div>
            <h1>students info</h1>
            <ul>{list}</ul>
        </div>
    )
}