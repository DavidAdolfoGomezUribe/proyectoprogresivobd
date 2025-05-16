"use client"

import Image from "next/image";
import CodeBlock from "./components/CodeBlock"; 

import Link from "next/link";

export default function Home() {
  const ejemploCodigo = `
// Documento 1
{ "nombre": "Ana", "edad": 30 }

// Documento 2
{ "nombre": "Luis", "correo": "luis@mail.com", "activo": true }
  `;



  return (
   <>
    <header className="w-[100%] bg-white fixed">
      <div className="mx-[10%] flex flex-row justify-between items-center h-20">

        {/* logo*/}
        <h1 className="titulo text-3xl" >Play_</h1>
       
        <div className="flex flex-row gap-8">
          <Link href={"/login"} className="w-24 p-2 cursor-pointer  hover:rounded-2xl hover:bg-blue-600 hover:text-white text-center">Login</Link>
          <Link href={"/leaderboard"} className="w-32 p-2 cursor-pointer hover:rounded-2xl hover:bg-blue-600 hover:text-white text-center" >Leader Board</Link>
        </div>

      </div>
      
    </header>
    <main className="pt-20 mx-[10%] ">
      <section className="flex flex-row gap-10 pt-20">
        
        <article className="flex flex-col w-[60%] gap-10 justify-center" >

            <h1 className="subtitulo text-2xl">¿Qué es una base de datos NoSQL? </h1>
            
            <p className="w-[80%]">NoSQL, también conocido como "no sólo SQL" o "no SQL", es un enfoque utilizado en 
            el diseño de bases de datos que permite el almacenamiento y 
            consulta de datos fuera de las estructuras tradicionales que se encuentran
            en las bases de datos relacionales.
              
            Pon aprueba tus conocimientos con este juego interactivo
            </p>
            <Link  href={"/juego"} className="text-white bg-blue-600 h-12 rounded-2xl cursor-pointer w-[80%] flex items-center justify-center ">Jugar</Link>
          
        </article>
        
        <aside className="w-[50%] flex items-center" >
          
          <Image className="w-full h-auto" src={"/jostickhand.svg"}width={500} height={500} alt="jostickhand" />        
        
        </aside>
        
      
      </section>

      <section className="pt-20 flex flex-col gap-5 items-center">
        <article>
          <h1 className="subtitulo text-3xl text-center">Cientos de empresas de juegos confían en nosotros</h1>
        </article>

        <article className="flex flex-row gap-10 justify-center items-center">
          <Image className="w-1/7 " src="/asus.png" width={500} height={500} alt="packaje" />
          <Image className="w-1/7 " src="/atari.png" width={500} height={500} alt="packaje" />
          <Image className="w-1/7 " src="/blizard.webp" width={500} height={500} alt="packaje" />
          <Image className="w-1/7 " src="/gameloft.png" width={500} height={500} alt="packaje" />
          <Image className="w-1/7 " src="/ps1.webp" width={500} height={500} alt="packaje" />

        </article>
      </section>

      <section className="pt-20 flex flex-col items-center">
        <article>
          <div className="flex flex-col gap-3">
            <h2 className="subtitulo text-blue-500 text-2xl text-center"> Caracteristicas</h2>
            
            <h1 className="subtitulo  text-4xl text-center">BASES DE DATOS NoSQL</h1>

          </div>

          <div className="flex flex-wrap gap-15 pt-10 justify-center  w-[100%]">

            <div className="w-180 flex flex-col items-center gap-2 bg-[#252525] text-white p-4 rounded-2xl">
              <Image className="w-1/7 " src="/packaje.png" width={500} height={500} alt="packaje" />
              <h1 className="subtitulo text-2xl"> Modelo de datos flexible {"("}sin esquemas rígidos{")"}</h1>
              <p>En una base de datos NoSQL como MongoDB, puedes guardar documentos con estructuras diferentes en la misma colección. Por ejemplo:</p>
              <CodeBlock code={ejemploCodigo} language="json" />
              <p>👉 Esto permite adaptarse rápidamente a cambios sin migraciones complejas, a diferencia de las bases SQL donde debes modificar la estructura de las tablas.</p>
            
            </div>
            
            
            <div className="w-180 flex flex-col items-center gap-2 bg-[#252525] text-white p-4 rounded-2xl">
              <Image className="w-1/7 " src="/thunder.png" width={500} height={500} alt="packaje" />
              <h1 className="subtitulo text-2xl">Alta escalabilidad horizontal</h1>
              <p>Bases como Cassandra permiten distribuir datos entre múltiples servidores fácilmente.
                 Si tu aplicación crece, puedes agregar más nodos sin rediseñar tu base de datos.
              </p>
              <br />
              <p>✅ Ideal para aplicaciones que manejan grandes volúmenes de datos y requieren alta disponibilidad.</p>
                
            </div>
            
            <div className="w-180 flex flex-col items-center gap-2 bg-[#252525] text-white p-4 rounded-2xl">
              <Image className="w-1/7 rounded-full " src="/globev.webp" width={500} height={500} alt="packaje" />
              <h1 className="subtitulo text-2xl text-center">Optimizado para grandes cantidades de datos no estructurados</h1>
              <p>Elasticsearch, una base NoSQL orientada a búsquedas, permite almacenar y consultar rápidamente millones de documentos de texto, logs o contenido web.
                🧠 Perfecto para búsquedas inteligentes y análisis de texto en tiempo real.
              </p>
            </div>
            
            
            <div className="w-180 flex flex-col items-center gap-2 bg-[#252525] text-white p-4 rounded-2xl">
              <Image className="w-1/7  " src="/filebox.svg" width={500} height={500} alt="packaje" /> 
              <h1 className="subtitulo text-2xl text-center"> Soporte para distintos modelos {"("} clave-valor, documentos, grafos, columnas{")"}</h1>
              <p>NoSQL no es un solo tipo de base: incluye varios modelos según el uso. Por ejemplo:

                  Redis usa clave-valor (ideal para caché).

                  Neo4j usa grafos (ideal para redes sociales).

                  CouchDB usa documentos.

              🔧 Esto te permite elegir el tipo de base de datos según el problema a resolver.
              </p>
            </div>
            
            
            <div className="w-180 flex flex-col items-center gap-2 bg-[#252525] text-white p-4 rounded-2xl">
              <Image className="w-1/7  " src="/arrows.svg" width={500} height={500} alt="packaje" /> 
              <h1 className="subtitulo text-2xl">Alto rendimiento con grandes volúmenes y baja latencia</h1>
              <p>NoSQL está diseñado para velocidad. Por ejemplo, Redis guarda datos en memoria, lo que permite leer y escribir en milisegundos, ideal para sistemas de recomendaciones o chats en tiempo real.

              🚀 NoSQL prioriza el rendimiento y la disponibilidad por encima de la consistencia inmediata {"("}según el modelo CAP {")"} .</p>
            </div>
          
          </div>


        </article>
      </section>

      <section className="pt-20">
        <article>
          
          
          <div className="flex flex-row gap-0.5 w-full rounded-2xl border-3 border-solid bg-[#252525] p-3">
            <Image className="w-1/2 rounded-2xl" src={"/nd.jpg"}  width={500} height={500} alt="db"/>
            <Image  className="w-1/2 rounded-2xl" src={"/NoSQL4.webp"}  width={500} height={500} alt="db"/>
          </div>

        </article>

      </section>

      <section className="pt-20 pb-20 flex flex-col gap-7" >
        <h1 className="subtitulo text-4xl text-center text-blue-500">Nuestro Equipo</h1>

        <article className="flex flex-row gap-4">
          <div className="p-4 bg-[#252525] w-1/2  rounded-2xl text-white flex flex-col gap-2">
            <Image className="w-[100%] h-auto rounded-2xl" src="/dav.png" width={500} height={500} alt="packaje" /> 
            <h1 className="subtitulo text-2xl">David Gomez</h1>
            <p className="text-2xl">Director ejecutivo</p>
          </div>
          
          <div className="p-4 bg-[#252525] w-1/2  rounded-2xl text-white flex flex-col gap-2">
            <Image className="w-[100%] h-auto rounded-2xl" src="/brey.png" width={500} height={500} alt="packaje" /> 
            <h1 className="subtitulo text-2xl">Breyner Pinto</h1>
            <p className="text-2xl">Administrador de bases de datos</p>
          </div>
          
          <div className="p-4 bg-[#252525] w-1/2  rounded-2xl text-white flex flex-col gap-2">
            <Image className="w-[100%] h-auto rounded-2xl" src="/mat.png" width={500} height={500} alt="packaje" /> 
            <h1 className="subtitulo text-2xl">Mateo Paternina</h1>
            <p className="text-2xl">Director de tecnología</p>
          </div>
          
          <div className="p-4 bg-[#252525] w-1/2  rounded-2xl text-white flex flex-col gap-2">
            <Image className="w-[100%] h-auto rounded-2xl" src="/dan.png" width={500} height={500} alt="packaje" /> 
            <h1 className="subtitulo text-2xl">Daniel Cubides</h1>
            <p className="text-2xl">Director de Seguridad de la Información</p>
          </div>

        </article>
      </section>




    </main>
    <footer className="bg-[#353535] h-15 text-white flex items-center">
      <div>

        <p  className="subtitulo pl-4">Todos los derechos reservados copyright 2025</p>
      </div>
    </footer>


   
   </>
  );
}
