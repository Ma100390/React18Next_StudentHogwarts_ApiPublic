import Link from "next/link";

export default function Home() {
  return (
    
    <div className="home-container1">
        
      <h1 className="title">Seleziona una casata:</h1>
      <div className="buttons-container">
        <Link href="/house/Gryffindor" className="house-button gryffindor">
          Gryffindor
        </Link>
        <Link href="/house/Hufflepuff" className="house-button hufflepuff">
          Hufflepuff
        </Link>
        <Link href="/house/Ravenclaw" className="house-button ravenclaw">
          Ravenclaw
        </Link>
        <Link href="/house/Slytherin" className="house-button slytherin">
          Slytherin
        </Link>
      </div>
    </div>
  );
}
