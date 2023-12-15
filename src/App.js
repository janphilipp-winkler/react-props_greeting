import "./styles.css";

function Greeting({ name, isCoach }) {
  // return `Hello, ${name}!`;
  return <>Hello, {isCoach ? <span>Coach</span> : name}</>;
}

// function UserCard({ name, isFavorite }) {
//   return (
//     <div>
//       {name}
//       {isFavorite ? <span>🌟</span> : null}
//     </div>
//   );
// }

export default function App() {
  return <Greeting name="Heidi" isCoach />;
}
