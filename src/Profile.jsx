
import ronaldo from './ronaldo.jpeg'

export default function Profile() {
    return (
        <div>
            <p>ronaldo</p>
            <img
            src={ronaldo} style={{ width: "200px", height: "200px",borderRadius:"50%"}}
            />
        </div>
    );
}