import React from 'react' ;
import Propschild from './Propschild';
export default function Parentprops() {
    const namereal = "sumukh";
    const companyreal = "andu pandu";

    return (
        <div>
            <h1>parent component</h1>
            <Propschild name={namereal} company={companyreal} />
        </div>
    );
}