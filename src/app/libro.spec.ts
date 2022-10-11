import { Autor } from './autor';
import { Libro } from './libro';

describe('Casos de prueba parametrizables', () => {
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

  let listaAutor: Array<Autor>;
  let libroAutor: Libro;
  beforeEach(() => {
    libroAutor = new Libro();
    listaAutor = new Array<Autor>();
  });
  it('Casos de prueba para validar que el autor es asignado correctamente', () => {
    [
      { autor: aut1 },
      { autor: aut2 },
      { autor: aut3 },
      { autor: aut4 },
      { autor: aut5 },
    ].forEach(({ autor }) => {
      listaAutor.push(autor);
      libroAutor.setAutor(autor);
      expect(libroAutor.getAutores()).toEqual(listaAutor);
    });
  });

  let libroGetAutor = new Libro();

  libroGetAutor.setAutor(aut1);
  libroGetAutor.setAutor(aut2);
  libroGetAutor.setAutor(aut3);
  libroGetAutor.setAutor(aut4);
  libroGetAutor.setAutor(aut5);

  it('Casos de prueba para validar que el metodo getAutor funciona correctamente', () => {
    [
      { autor: aut1 },
      { autor: aut2 },
      { autor: aut3 },
      { autor: aut4 },
      { autor: aut5 },
    ].forEach(({ autor }) => {
      expect(libroGetAutor.getAutor(autor.getIdentificador())).toEqual(autor);
    });
  });

});
