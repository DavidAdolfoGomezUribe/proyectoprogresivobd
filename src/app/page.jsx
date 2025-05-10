import Image from "next/image";

export default function Home() {
  return (
   <>
    <header>
      <div>
        {/* logo*/}
        <p>logo</p>
        <div>
          <button>Login</button>
          <button>Leader Board</button>
        </div>

      </div>
    </header>
    <main>
      <section>
        <article>
          <h1>¿Qué es una base de datos NoSQL? </h1>
          <p>NoSQL, también conocido como "no sólo SQL" o "no SQL", es un enfoque utilizado en 
            el diseño de bases de datos que permite el almacenamiento y 
            consulta de datos fuera de las estructuras tradicionales que se encuentran
             en las bases de datos relacionales.</p>
          <button>Jugar</button>
          
        </article>
        {/* A la derecha */}
        <aside>
          {/* imagen*/}
          <p>aqui va una imagen</p>
        </aside>

      </section>

      <section>
        <article>
          <p>We are trusted by hundreads of game companies</p>
        </article>

        <article>
          <p>logo 1</p>
          <p>logo 2</p>
          <p>logo 3</p>
          <p>logo 4</p>
          <p>logo 5</p>

        </article>
      </section>

      <section>
        <article>
          <div>
            <h2> caracteristicas</h2>
            <h1>Ejemplos</h1>
            <p>bases de datos NoSQL</p>

          </div>

          <div>

            <div>
              <p>imagen</p>
              <p>titulo</p>
              <p>ejemplo descriptivo</p>
            </div>
            <div>
              <p>imagen</p>
              <p>titulo</p>
              <p></p>
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

      <section>
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

      <section>
        <article>
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
    <footer>
      <p>contactenos</p>
    </footer>


   </>
  );
}
