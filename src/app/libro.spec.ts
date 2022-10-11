import { Autor } from './autor';
import { Libro } from './libro';

describe('Metodo getAutor parametrizable : Valido', () => {
  const aut1 = new Autor();
  aut1.setIdentificador(1);

  const aut2 = new Autor();
  aut2.setIdentificador(2);

  const aut3 = new Autor();
  aut3.setIdentificador(3);

  const aut4 = new Autor();
  aut4.setIdentificador(4);

  const aut5 = new Autor();
  aut5.setIdentificador(5);

  let libroAutor: Libro;

  beforeEach(() => {
    libroAutor = new Libro();
  });

  /*
    Caso válido del método de la clase libro getAutor que busca un autor en la lista de autores del libro por medio de su id
    el objetivo de esta es verificar que dado un id de un autor de un libro en especifico, si se utiliza la función getAutor, esta retorna el
    autor correctamente, para ello se crearon 5 autores con ids del 1 al 5, se añadieron a un libro y seguidamente pasamos a utilizar el metodo getAutor
    con estos ids, por ultimo el resultado esperado es que retorne los 5 autores de 1 en 1 sin ningun error.
    */

  it('Casos de prueba para validar que el metodo getAutor funciona correctamente : Exitoso', () => {
    [
      { autor: aut1 },
      { autor: aut2 },
      { autor: aut3 },
      { autor: aut4 },
      { autor: aut5 },
    ].forEach(({ autor }) => {
      libroAutor.setAutor(autor);

      expect(libroAutor.getAutor(autor.getIdentificador())).toEqual(autor);
    });
  });
});
