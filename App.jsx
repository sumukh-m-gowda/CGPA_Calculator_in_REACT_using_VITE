import './App.css';

const user = {
  name : "Cristiano_Ronaldo",
  image : 'https://i.pinimg.com/736x/5e/f9/69/5ef96988a867d845d2651165ade970a2.jpg',
  size : 90
};

export default function App() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img 
          className='ronaldo' 
          src={user.image} 
          style={{
          width: user.size,
          height: user.size,
          borderRadius: '50%',
        }}
      />
    </div>
  )
}
