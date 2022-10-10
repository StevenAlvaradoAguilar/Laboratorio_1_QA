import { Biblioteca } from './biblioteca';
import { Libro } from './libro';
import { Prestamo } from './prestamo';
import { Autor } from './autor';
import { DetallePrestamo } from './detalle-prestamo';

describe('Biblioteca', () => {
  it('should create an instance', () => {
    expect(new Biblioteca()).toBeTruthy();
  });
});

/*
Caso válido del método de la clase biblioteca que busca la posición de un libro especifíco
el objetivo de esta es verificar que los datos ingresados sean correctos para encontrar la posición del libro, 
los datos de prueba son la creación de un nuevo autor, libro y este libro se guarda en la clase biblioteca
y el resultado esperado es que lo encuentre en la posición cero, ya que es el primer libro guardado.
*/
describe('Método Biblioteca válido', function () {
  let libroNuevo: any;
  let bibliotecaNueva: any;
  let autorNuevo: any;
  beforeEach(() => {
    libroNuevo = new Libro();
    bibliotecaNueva = new Biblioteca();
    autorNuevo = new Autor();
  });
  it('Buscar posición de un Libro especifico: Exitoso', () => {
    autorNuevo.setIdentificador(52);
    autorNuevo.setNombre('Antoine');
    autorNuevo.setApellidos('de Saint-Exupéry')
    autorNuevo.setFechaNacimiento('29 de junio de 1900');
    autorNuevo.setCreatedOn('6 de abril de 1943');
    autorNuevo.setNacionalidad('Francés');

    libroNuevo.setCodigo(12)
    libroNuevo.setTitulo('El Principito');
    libroNuevo.setAutor(autorNuevo);
    libroNuevo.setDisponible(true);
    libroNuevo.setPrecio(5000);
    libroNuevo.setCreatedOn('US');

    bibliotecaNueva.setLibro(libroNuevo)

    expect(bibliotecaNueva.buscarPosicionLibro(12)).toBe(0);
  });
  afterEach(function () {
    libroNuevo = null;
    bibliotecaNueva = null;
    autorNuevo = null;
  });
});

/*
Caso inválido del método de la clase biblioteca que busca la posición de un libro especifíco
el objetivo de esta es verificar que los datos ingresados sean incorrectos y que no encuentre la posición del libro, 
los datos de prueba son la creación de un nuevo autor, libro y este libro se guarda en la clase biblioteca
y el resultado esperado es que lo encuentre en la posición cero, ya que es el primer libro guardado.
*/
describe('Método Biblioteca inválido', function () {
  let libroNuevo: any;
  let bibliotecaNueva: any;
  let autorNuevo: any;
  beforeEach(() => {
    libroNuevo = new Libro();
    bibliotecaNueva = new Biblioteca();
    autorNuevo = new Autor();
  });
  it('Buscar posición de un Libro especifico: Fallido', () => {
    autorNuevo.setIdentificador(52);
    autorNuevo.setNombre('Antoine');
    autorNuevo.setApellidos('de Saint-Exupéry')
    autorNuevo.setFechaNacimiento('29 de junio de 1900');
    autorNuevo.setCreatedOn('6 de abril de 1943');
    autorNuevo.setNacionalidad('Francés');

    libroNuevo.setCodigo(12)
    libroNuevo.setTitulo('El Principito');
    libroNuevo.setAutor(autorNuevo);
    libroNuevo.setDisponible(true);
    libroNuevo.setPrecio(5000);
    libroNuevo.setCreatedOn('US');

    bibliotecaNueva.setLibro(libroNuevo);

    expect(bibliotecaNueva.buscarPosicionLibro(25)).toBe(-1);
  });
  afterEach(function () {
    libroNuevo = null;
    bibliotecaNueva = null;
    autorNuevo = null;
  });
});

/*
Caso válido del método de la clase biblioteca que busca un préstamo por codigo específico
el objetivo de esta es verificar que los datos ingresados sean correctos para buscar un código de un préstamo, 
los datos de prueba son la creación de un nuevo autor, libro, detalle del préstamo, un préstamo nuevo y este préstamo
se guarda en la clase biblioteca y el resultado esperado es que el código sea encontrado y retorne el préstamo.
*/
describe('Método Biblioteca Prestamo Por Codigo válido', function () {
  let libroNuevo: any;
  let autorNuevo: any;
  let prestamoNuevo: any;
  let bibliotecaNueva: any;
  let detallePrestamoNuevo: any;
  beforeEach(() => {
    libroNuevo = new Libro();
    autorNuevo = new Autor();
    prestamoNuevo = new Prestamo();
    bibliotecaNueva = new Biblioteca();
    detallePrestamoNuevo = new DetallePrestamo();
  });
  it('Buscar un prestamo por codigo especifico: Exitoso', () => {
    autorNuevo.setIdentificador(52);
    autorNuevo.setNombre('Antoine');
    autorNuevo.setApellidos('de Saint-Exupéry')
    autorNuevo.setFechaNacimiento('29 de junio de 1900');
    autorNuevo.setCreatedOn('6 de abril de 1943');
    autorNuevo.setNacionalidad('Francés');

    libroNuevo.setCodigo(12)
    libroNuevo.setTitulo('El Principito');
    libroNuevo.setAutor(autorNuevo);
    libroNuevo.setDisponible(true);
    libroNuevo.setPrecio(5000);
    libroNuevo.setCreatedOn('US');

    detallePrestamoNuevo.setId(45);
    detallePrestamoNuevo.setLibro(libroNuevo);
    detallePrestamoNuevo.setCantidad(1);
    detallePrestamoNuevo.setPrecio(7500);
    detallePrestamoNuevo.setPorcenIva(13);
    detallePrestamoNuevo.setMontoIva(975);

    prestamoNuevo.setId(15)
    prestamoNuevo.setEstado('Activo');
    prestamoNuevo.setMulta(null);
    prestamoNuevo.setDetalle(detallePrestamoNuevo);
    prestamoNuevo.setSocio(null);
    prestamoNuevo.setLocalDateTime(new Date());

    bibliotecaNueva.setPrestamo(prestamoNuevo);

    expect(bibliotecaNueva.buscarPrestamoPorCodigo(15)).toBe(prestamoNuevo);
  });
  afterEach(function () {
    libroNuevo = null;
    prestamoNuevo = null;
    autorNuevo = null;
    bibliotecaNueva = null;
    detallePrestamoNuevo = null;
  });
});

/*
Caso inválido del método de la clase biblioteca que busca un préstamo por código específico
el objetivo de esta es verificar que los datos ingresados sean incorrectos para no encontrar un código de un préstamo, 
los datos de prueba son la creación de un nuevo autor, libro, detalle del préstamo, un préstamo nuevo y este préstamo
se guarda en la clase biblioteca y el resultado esperado es que el código no sea encontrado y que retorne null.
*/
describe('Método Biblioteca Prestamo Por Codigo inválido', function () {
  let libroNuevo: any;
  let autorNuevo: any;
  let prestamoNuevo: any;
  let bibliotecaNueva: any;
  let detallePrestamoNuevo: any;
  beforeEach(() => {
    libroNuevo = new Libro();
    autorNuevo = new Autor();
    prestamoNuevo = new Prestamo();
    bibliotecaNueva = new Biblioteca();
    detallePrestamoNuevo = new DetallePrestamo();
  });
  it('Buscar un prestamo por codigo especifico: Fallido', () => {
    autorNuevo.setIdentificador(52);
    autorNuevo.setNombre('Antoine');
    autorNuevo.setApellidos('de Saint-Exupéry')
    autorNuevo.setFechaNacimiento('29 de junio de 1900');
    autorNuevo.setCreatedOn('6 de abril de 1943');
    autorNuevo.setNacionalidad('Francés');

    libroNuevo.setCodigo(12)
    libroNuevo.setTitulo('El Principito');
    libroNuevo.setAutor(autorNuevo);
    libroNuevo.setDisponible(true);
    libroNuevo.setPrecio(5000);
    libroNuevo.setCreatedOn('US');

    detallePrestamoNuevo.setId(45);
    detallePrestamoNuevo.setLibro(libroNuevo);
    detallePrestamoNuevo.setCantidad(1);
    detallePrestamoNuevo.setPrecio(7500);
    detallePrestamoNuevo.setPorcenIva(13);
    detallePrestamoNuevo.setMontoIva(975);

    prestamoNuevo.setId(15)
    prestamoNuevo.setEstado('Activo');
    prestamoNuevo.setMulta(null);
    prestamoNuevo.setDetalle(detallePrestamoNuevo);
    prestamoNuevo.setSocio(null);
    prestamoNuevo.setLocalDateTime(new Date());

    bibliotecaNueva.setPrestamo(prestamoNuevo);

    expect(bibliotecaNueva.buscarPrestamoPorCodigo(85)).toBe(null);
  });
  afterEach(function () {
    libroNuevo = null;
    prestamoNuevo = null;
    autorNuevo = null;
    bibliotecaNueva = null;
    detallePrestamoNuevo = null;
  });
});