import persons from '../data/persons';
import Person from './Person';

function Persons() {
    return persons.map((person) => {
        return <div>
            <Person key={person.id} {...person}/>;
        </div>;
    });
}

export default Persons;