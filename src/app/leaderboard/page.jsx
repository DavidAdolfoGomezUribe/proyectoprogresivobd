"use client";



import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [leaderBoard, setLeaderBoard] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://681cec17f74de1d219ae45cd.mockapi.io/leaderBoard");
        const data = await response.json();
        setLeaderBoard(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Función que devuelve los elementos ordenados por score descendente
  function getHighestScores() {
    return [...leaderBoard].sort((a, b) => b.score - a.score);
  }

  const sortedElements = getHighestScores();
  console.log(sortedElements);
  
  return (
    <>
        <header className="flex flex-row h-19 w-full bg-blue-600 justify-between items-center ">
            <h1 className="titulo text-3xl pl-[10%]" >Play_</h1>
            <h1 className="subtitulo text-2xl pr-[10%]">LEADERBOARD</h1>
        </header>
      <main className="ml-[10%] mr-[10%]">
      
      
      <div className="pt-17"> 
        {sortedElements.map((entry, index) => (
            <div key={entry.id || index}>
            <p><strong>Usuario:</strong> {entry.user}</p>
            <p><strong>Puntaje:</strong> {entry.score}</p>
            </div>
        ))}

      </div>

      <Link href={"./"}> Volver </Link>
      </main>
    
    
    
    </>
  );

}