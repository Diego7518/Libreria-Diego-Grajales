let libros = [
    {
        titulo: 'Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        genero: 'ficcion',
        idioma: 'Español',
        precio: '25 USD',
        formato: 'Tapa blanda',
        isbn: '10',
        descripcion: 'Relata las aventuras y desventuras de un hidalgo de 50 años llamado Alonso Quijano, quien decide ser un caballero andante como aquellos que aparecen en sus libros de caballerías favoritos.',
        estado: 'Nuevo',
        ubicacion: 'Colombia',
        fecha_publicacion: 1868,
        editorial: 'Penguin Classics',
        paginas: '1056',
        dimensiones: '6 x 1.05 x 9 pulgadas',
        peso: '50grs',
    },
    {
        titulo: 'Macbeth',
        autor: 'William Shakespeare',
        genero: 'tragedia',
        idioma: 'Español',
        precio: '20 USD',
        formato: 'Tapa blanda',
        isbn: '84-85708-07-5',
        descripcion: 'cuenta una historia de crimen y castigo entreverada de brujería y elementos sobrenaturales. Amparado en las engañosas profecías de las Hermanas Fatídicas, brujas o diosas del destino, Macbeth decide asesinar a su rey y tomar la corona.',
        estado: 'Nuevo',
        ubicacion: 'Colombia',
        fecha_publicacion: 1606,
        editorial: 'Penguin Classics',
        paginas: '133',
        dimensiones: 'Ancho: 14cm - Alto: 20cm',
        peso: '50grs',
    },
    {
        titulo: 'Por todos los dioses',
        autor: 'Ramon Garcia Dominguez',
        genero: 'ficcion',
        idioma: 'Español',
        precio: '12 USD',
        formato: 'Tapa blanda',
        isbn: '9580407371',
        descripcion: 'Homero decide contarle a un niño contemporáneo sobre el extraordinario mundo de los dioses. En la mitología clásica se relatan algunas de las aventuras más grandes de todos los tiempos. En ella aparecen dioses, héroes, monstruos, ninfas, sirenas, gigantes y otros seres extraordinarios.',
        estado: 'Nuevo',
        ubicacion: 'Colombia',
        fecha_publicacion: 1989,
        editorial: 'Penguin Classics',
        paginas: '120',
        dimensiones: '18.0 x 10.2 x 0.8 cm',
        peso: '0.09kg',
    },
    {
        titulo: 'Cien años de soledad',
        autor: 'Gabriel Garcia Márquez',
        genero: 'ficcion',
        idioma: 'Español',
        precio: '15 USD',
        formato: 'Tapa blanda',
        isbn: '978-0307474728',
        descripcion: 'La historia épica de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo.',
        estado: 'Nuevo',
        ubicacion: 'Colombia',
        fecha_publicacion: 1967,
        editorial: 'Penguin Classics',
        paginas: '432',
        dimensiones: '13.5 x 2.5 x 20.3 cm',
        peso: '340g',
    },
    {
        titulo: 'Orgullo y prejuicio',
        autor: 'Jane Austen',
        genero: 'romance',
        idioma: 'Ingles',
        precio: '12 USD',
        formato: 'Tapa blanda',
        isbn: '978-0141439518',
        descripcion: 'Una historia de amor en la Inglaterra del siglo XIX.',
        estado: 'Nuevo',
        ubicacion: 'Disponible en línea',
        fecha_publicacion: 1813,
        editorial: 'Penguin Classics',
        paginas: '416',
        dimensiones: '13 x 2.5 x 19.8 cm',
        peso: '290g',
    },
];

let librosConDescuento = libros.map(libro => {
    let precioSinUsd = parseFloat(libro.precio.replace(' USD', ''));
    let descuento = (precioSinUsd * 0.20).toFixed(2) + ' USD';
    return {
        ...libro,
        descuento: descuento,
    };
});

let listaLibrosConDescuento = librosConDescuento.map(libro => ({
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    precio: libro.precio,
    descuento: libro.descuento,
}));

console.log("Lista de libros (Título, Autor, Editorial, Precio, Descuento):");
console.log(listaLibrosConDescuento);

function mostrarLibros() {
    console.log('Lista de libros:');
    libros.forEach((libro, index) => {
        console.log(`${index + 1}`+`${libro.titulo}`);
        console.log(`${index + 1}. ${libro.titulo}`);
    });
}

function mostrarLibrosConDescuento() {
    librosConDescuento.forEach((iteracion, index) => {
        console.log(`Iteración ${index + 1}:`);
        console.table(iteracion);
    });
}

let salir = false;
while (!salir) {
    let opcion = prompt('Ingrese una opción: 1. Ver libros, 2. Agregar libro, 3. Salir, 4. Mostrar pila');
    switch (opcion) {
        case '1':
            mostrarLibros();
            break;
        case '2':
            let titulo = prompt('Ingrese el título del libro:');
            let nuevoLibro = {
                titulo,
                autor: prompt('Ingrese el autor del libro:'),
                genero: prompt('Ingrese el género del libro:'),
                idioma: prompt('Ingrese el idioma del libro:'),
                precio: prompt('Ingrese el precio del libro:'),
                formato: prompt('Ingrese el formato del libro:'),
                isbn: prompt('Ingrese el ISBN del libro:'),
                descripcion: prompt('Ingrese la descripción del libro:'),
                estado: 'Nuevo',
                ubicacion: 'Colombia',
                editorial: prompt('Ingrese la editorial del libro:'),
                paginas: prompt('Ingrese el número de páginas del libro:'),
            };
            libros.push(nuevoLibro);
            break;
        case '3':
            salir = true;
            break;
        case '4':
            mostrarLibrosConDescuento();
            break;
        default:
            console.log('Opción no válida, por favor intente de nuevo.');
    }
}
const listar1 = libros.map(libro => {
    let precioOriginal = parseFloat(libro.precio.replace(' USD', ''));
    let descuento = 0.20; // 20% de descuento
    let precioConDescuento = (precioOriginal * (1 - descuento)).toFixed(2) + ' USD';
    return {
        Título: libro.titulo,
        Autor: libro.autor,
        Editorial: libro.editorial,
        Precio: libro.precio,
        Descuento: '20%',
        'Precio con Descuento': precioConDescuento
    };
});

console.table(listar1);
console.log('Disfrute de su lectura.')
console.log('Disfrute de su lectura.');