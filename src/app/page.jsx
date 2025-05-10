"use client"

import Image from "next/image";
import CodeBlock from "./components/CodeBlock"; 


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
        <p>logo</p>
       
        <div>
          <button>Login</button>
          <button>Leader Board</button>
        </div>

      </div>
      
    </header>
    <main className="pt-20 mx-[10%] ">
      <section className="flex flex-row gap-10 pt-20">
        
        <article className="flex flex-col w-[60%] gap-10 justify-center" >

            <h1>¿Qué es una base de datos NoSQL? </h1>
            
            <p className="w-[80%]">NoSQL, también conocido como "no sólo SQL" o "no SQL", es un enfoque utilizado en 
            el diseño de bases de datos que permite el almacenamiento y 
            consulta de datos fuera de las estructuras tradicionales que se encuentran
            en las bases de datos relacionales.
              
            Pon aprueba tus conocimientos con este juego interactivo
            </p>
            <button className="text-white bg-blue-600 h-12 rounded-2xl cursor-pointer w-[80%]">Jugar</button>
          
        </article>
        
        <aside className="w-[50%] flex items-center" >
          
          <Image className="w-full h-auto" src={"/jostickhand.svg"}width={100} height={100} alt="jostickhand" />        
        
        </aside>
        
      
      </section>

      <section className="pt-20 flex flex-col gap-5 items-center">
        <article>
          <p>We are trusted by hundreads of game companies</p>
        </article>

        <article className="flex flex-row gap-10">
          <p>logo 1</p>
          <p>logo 2</p>
          <p>logo 3</p>
          <p>logo 4</p>
          <p>logo 5</p>

        </article>
      </section>

      <section className="pt-20 flex flex-col items-center">
        <article>
          <div>
            <h2> caracteristicas</h2>
            <h1>Ejemplos</h1>
            <p>bases de datos NoSQL</p>

          </div>

          <div className="flex flex-wrap gap-20 pt-10 justify-between  w-[100%]">

            <div className="w-180">
              <p>📦</p>
              <h1> Modelo de datos flexible {"("}sin esquemas rígidos{")"}</h1>
              <p>En una base de datos NoSQL como MongoDB, puedes guardar documentos con estructuras diferentes en la misma colección. Por ejemplo:</p>
              <CodeBlock code={ejemploCodigo} language="json" />
              <p>👉 Esto permite adaptarse rápidamente a cambios sin migraciones complejas, a diferencia de las bases SQL donde debes modificar la estructura de las tablas.</p>
            
            </div>
            
            
            <div className="w-180">
              <p>⚡</p>
              <p>Alta escalabilidad horizontal</p>
              <p>Bases como Cassandra permiten distribuir datos entre múltiples servidores fácilmente.
                 Si tu aplicación crece, puedes agregar más nodos sin rediseñar tu base de datos.

              ✅ Ideal para aplicaciones que manejan grandes volúmenes de datos y requieren alta disponibilidad.
              </p>
            </div>
            
            <div className="w-180">
              <p>🌐</p>
              <p>Optimizado para grandes cantidades de datos no estructurados</p>
              <p>Elasticsearch, una base NoSQL orientada a búsquedas, permite almacenar y consultar rápidamente millones de documentos de texto, logs o contenido web.
                🧠 Perfecto para búsquedas inteligentes y análisis de texto en tiempo real.
              </p>
            </div>
            
            
            <div className="w-180">
              <p>🗃️</p>
              <p> Soporte para distintos modelos {"("} clave-valor, documentos, grafos, columnas{")"}</p>
              <p>NoSQL no es un solo tipo de base: incluye varios modelos según el uso. Por ejemplo:

                  Redis usa clave-valor (ideal para caché).

                  Neo4j usa grafos (ideal para redes sociales).

                  CouchDB usa documentos.

              🔧 Esto te permite elegir el tipo de base de datos según el problema a resolver.
              </p>
            </div>
            
            
            <div className="w-180">
              <p> 🔁 </p>
              <p>Alto rendimiento con grandes volúmenes y baja latencia</p>
              <p>NoSQL está diseñado para velocidad. Por ejemplo, Redis guarda datos en memoria, lo que permite leer y escribir en milisegundos, ideal para sistemas de recomendaciones o chats en tiempo real.

              🚀 NoSQL prioriza el rendimiento y la disponibilidad por encima de la consistencia inmediata {"("}según el modelo CAP {")"} .</p>
            </div>
          
          </div>


        </article>
      </section>

      <section className="pt-20">
        <article>
          <h2>casos</h2>
          <h1>ejemplos graficos</h1>
          <div>
            <p>imagen 1</p>
            <p>imagen 2</p>
            <p>imagen 3</p>
            <p>imagen 4</p>
          </div>

        </article>

      </section>

      <section className="pt-20 flex flex-col" >
        <h1>Nuestro Equipo</h1>

        <article className="flex flex-row">
          <div>
            <p>imagen</p>
            <h1>David Gomez</h1>
            <p>cargo</p>
          </div>
          <div>
            <p>imagen</p>
            <h1>Breyner Pinto</h1>
            <p>cargo</p>
          </div>
          <div>
            <p>imagen</p>
            <h1>Mateo Paternina</h1>
            <p>cargo</p>
          </div>
          <div>
            <p>imagen</p>
            <h1>Daniel Cubides</h1>
            <p>cargo</p>
          </div>

        </article>
      </section>




    </main>
    <footer className="mx-[10%] bg-amber-300">
      <p>contactenos</p>
    </footer>


   </>
  );
}
