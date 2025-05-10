import Image from "next/image";


export default function Home() {
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
        
        <article className="flex flex-col w-1/2">
          <h1>¿Qué es una base de datos NoSQL? </h1>
          <p>NoSQL, también conocido como "no sólo SQL" o "no SQL", es un enfoque utilizado en 
            el diseño de bases de datos que permite el almacenamiento y 
            consulta de datos fuera de las estructuras tradicionales que se encuentran
             en las bases de datos relacionales.</p>
          <button>Jugar</button>
          
        </article>
        
        <aside>{/* A la derecha */}
          {/* imagen*/}
          <p>aqui va una imagen</p>
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

          <div className="flex flex-wrap gap-20 pt-10 justify-between bg-amber-500 w-[100%]">

            <div>
              <p>imagen</p>
              <p>titulo</p>
              <p>ejemplo descriptivo</p>
            </div>
            <div>
              <p>imagen</p>
              <p>titulo</p>
              <p>ejemplo descriptivo</p>
            </div>
            <div>
              <p>imagen</p>
              <p>titulo</p>
              <p>ejemplo descriptivo</p>
            </div>
            <div>
              <p>imagen</p>
              <p>titulo</p>
              <p>ejemplo descriptivo</p>
            </div>
            <div>
              <p>imagen</p>
              <p>titulo</p>
              <p>ejemplo descriptivo</p>
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
