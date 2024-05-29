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
    editorial: 'Urbano Manini',
    paginas: '1056',
    dimensiones: '6 x 1.05 x 9 pulgadas',
    peso: '50grs',
    },
    
    {
    titulo: 'Macbeth',
    autor: 'William Shakespeare',
    genero: 'tragedia',
    idioma: 'Ingles',
    precio: '20 USD',
    formato: 'Tapa blanda',
    isbn: '84-85708-07-5',
    descripcion: 'Cuenta una historia de crimen y castigo entreverada de brujería y elementos sobrenaturales. Amparado en las engañosas profecías de las Hermanas Fatídicas, brujas o diosas del destino, Macbeth decide asesinar a su rey y tomar la corona.',
    estado: 'Nuevo',
    ubicacion: 'Inglaterra',
    fecha_publicacion: 1606,
    editorial: 'Urbano Manini',
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
    editorial: 'Urbano Manini',
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
    editorial: 'Urbano Manini',
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
    editorial: 'Urbano Manini',
    paginas: '416',
    dimensiones: '13 x 2.5 x 19.8 cm',
    peso: '290g',
    },
        
    {
    titulo: 'American Psycho',
    autor: 'Bret Easton Ellis',
    genero: 'ficcion',
    idioma: 'Inglés',
    precio: '30 USD',
    formato: 'Tapa blanda',
    isbn: '09788439736646.',
    descripcion: 'American Psycho es una novela publicada en 1991 por Bret Easton Ellis y que describe, en primera persona, los episodios en la vida de un yuppie asesino de Manhattan a finales de los años 1980.',
    estado: 'Nuevo',
    ubicacion: 'Estados Unidos',
    fecha_publicacion: 1991,
    editorial: 'Penguin Libros',
    paginas: '525',
    dimensiones: 'Ancho: 14cm - Alto: 23cm.',
    peso: '50grs',
    },
        
    {
    titulo: 'Pride and Prejudice',
    autor: 'Jane Austen',
    genero: 'ficcion',
    idioma: 'Ingles',
    precio: '12 USD',
    formato: 'Tapa blanda',
    isbn: '978-1503290563',
    descripcion: 'La historia de Elizabeth Bennet y su complicada relación con el orgulloso Sr. Darcy.',
    estado: 'Nuevo',
    ubicacion: 'Inglaterra',
    fecha_publicacion: 1813,
    editorial: 'Penguin Libros',
    paginas: '279',
    dimensiones: '13 x 1.8 x 20 cm',
    peso: '250g',
    },
        
    {
    titulo: 'El principito',
    autor: 'Antoine de Saint-Exupéry',
    genero: 'ficcion',
    idioma: 'Francés',
    precio: '10 USD',
    formato: 'Tapa blanda',
    isbn: '978-0156012195',
    descripcion: 'Un piloto se encuentra con un pequeño príncipe que ha caído a la Tierra desde un asteroide, y juntos exploran temas profundos sobre la vida.',
    estado: 'Nuevo',
    ubicacion: 'Francia',
    fecha_publicacion: 1943,
    editorial: 'Penguin Libros',
    paginas: '96',
    dimensiones: '12 x 0.6 x 19 cm',
    peso: '150g',
    },
        
    {
    titulo: 'The Catcher in the Rye',
    autor: 'J.D. Salinger',
    genero: 'ficcion',
    idioma: 'Inglés',
    precio: '14 USD',
    formato: 'Tapa blanda',
    isbn: '978-0316769488',
    descripcion: 'La historia de Holden Caulfield, un adolescente que navega por la angustia y la alienación en la ciudad de Nueva York.',
    estado: 'Nuevo',
    ubicacion: 'Estados Unidos',
    fecha_publicacion: 1951,
    editorial: 'Penguin Libros',
    paginas: '277',
    dimensiones: '14 x 1.9 x 21 cm',
    peso: '300g',
    },
        
    {
    titulo: 'Matar a un ruiseñor',
    autor: 'Harper Lee',
    genero: 'ficcion',
    idioma: 'Español',
    precio: '16.50 USD',
    formato: 'Tapa dura',
    isbn: '978-8439720325',
    descripcion: 'Una novela sobre la injusticia racial en un pequeño pueblo del sur de Estados Unidos, narrada desde la perspectiva de una niña.',
    estado: 'Nuevo',
    ubicacion: 'Argentina',
    fecha_publicacion: 1960,
    editorial: 'Penguin Libros',
    paginas: '376',
    dimensiones: '15 x 2.5 x 23 cm',
    peso: '420g',
    },
        
    {
    titulo: 'La sombra del viento',
    autor: 'Carlos Ruiz Zafón',
    genero: 'ficcion',
    idioma: 'Español',
    precio: '19 USD',
    formato: 'Tapa blanda',
    isbn: '978-0061129734',
    descripcion: 'Un joven descubre un misterioso libro en un "cementerio de libros olvidados" y se ve envuelto en un enigma relacionado con el autor del libro.',
    estado: 'Nuevo',
    ubicacion: 'España',
    fecha_publicacion: 2001,
    editorial: 'Planeta',
    paginas: '512',
    dimensiones: '13 x 3 x 20 cm',
    peso: '480g',
    },
        
    {
    titulo: 'The Great Gatsby',
    autor: 'F. Scott Fitzgerald',
    genero: 'ficcion',
    idioma: 'Inglés',
    precio: '11 USD',
    formato: 'Tapa blanda',
    isbn: '978-0743273565',
    descripcion: 'La historia del enigmático millonario Jay Gatsby y su obsesión con la bella Daisy Buchanan.',
    estado: 'Nuevo',
    ubicacion: 'Estados Unidos',
    fecha_publicacion: 1925,
    editorial: 'Planeta',
    paginas: '180',
    dimensiones: '13 x 1.2 x 20 cm',
    peso: '200g',
    },
        
    {
    titulo: '1984',
    autor: 'George Orwell',
    genero: 'ficcion',
    idioma: 'Inglés',
    precio: '18 USD',
    formato: 'Tapa blanda',
    isbn: '978-0451524935',
    descripcion: 'Una distopía sobre un régimen totalitario que controla todos los aspectos de la vida de los ciudadanos.',
    estado: 'Nuevo',
    ubicacion: 'Reino Unido',
    fecha_publicacion: 1949,
    editorial: 'Planeta',
    paginas: '328',
    dimensiones: '13 x 1.8 x 20 cm',
    peso: '270g',
    },
        
    {
    titulo: 'El Hobbit',
    autor: 'J.R.R. Tolkien',
    genero: 'fantasia',
    idioma: 'Español',
    precio: '22 USD',
    formato: 'Tapa dura',
    isbn: '978-0547928227',
    descripcion: 'Las aventuras de Bilbo Bolsón mientras acompaña a un grupo de enanos a recuperar su tesoro de un dragón.',
    estado: 'Nuevo',
    ubicacion: 'Nueva Zelanda',
    fecha_publicacion: 1937,
    editorial: 'Planeta',
    paginas: '310',
    dimensiones: '15 x 2 x 22 cm',
    peso: '340g',
    },
        
    {
    titulo: 'El nombre del viento',
    autor: 'Patrick Rothfuss',
    genero: 'fantasia',
    idioma: 'Español',
    precio: '25 USD',
    formato: 'Tapa dura',
    isbn: '978-8439722312',
    descripcion: 'La historia de Kvothe, un joven prodigio que se convierte en uno de los magos más poderosos de su tiempo.',
    estado: 'Nuevo',
    ubicacion: 'España',
    fecha_publicacion: 2007,
    editorial: 'Planeta',
    paginas: '880',
    dimensiones: '16 x 4.5 x 24 cm',
    peso: '980g',
    },
        
    {
    titulo: 'La chica del tren',
    autor: 'Paula Hawkins',
    genero: 'thriller',
    idioma: 'Español',
    precio: '15 USD',
    formato: 'Tapa blanda',
    isbn: '978-1594634024',
    descripcion: 'Rachel, una mujer con problemas de alcoholismo, se ve envuelta en la investigación de una desaparición.',
    estado: 'Nuevo',
    ubicacion: 'Reino Unido',
    fecha_publicacion: 2015,
    editorial: 'Torre de papel',
    paginas: '416',
    dimensiones: '14 x 2.5 x 21 cm',
    peso: '350g',
    },
        
    {
    titulo: 'Moby Dick',
    autor: 'Herman Melville',
    genero: 'ficcion',
    idioma: 'Inglés',
    precio: '17 USD',
    formato: 'Tapa blanda',
    isbn: '978-1503280786',
    descripcion: 'La épica caza de la ballena blanca, Moby Dick, por el capitán Ahab.',
    estado: 'Nuevo',
    ubicacion: 'Estados Unidos',
    fecha_publicacion: 1851,
    editorial: 'Torre de papel',
    paginas: '720',
    dimensiones: '14 x 3.2 x 22 cm',
    peso: '540g',
    },
        
    {
    titulo: 'Los miserables',
    autor: 'Victor Hugo',
    genero: 'ficcion',
    idioma: 'Español',
    precio: '28 USD',
    formato: 'Tapa blanda',
    isbn: '978-0140444308',
    descripcion: 'La historia de Jean Valjean, un ex convicto que busca redimirse, ambientada en la Francia del siglo XIX.',
    estado: 'Nuevo',
    ubicacion: 'Francia',
    fecha_publicacion: 1862,
    editorial: 'Torre de papel',
    paginas: '1232',
    dimensiones: '13 x 5 x 20 cm',
    peso: '950g',
    },
        
    {
    titulo: 'El retrato de Dorian Gray',
    autor: 'Oscar Wilde',
    genero: 'ficcion',
    idioma: 'Español',
    precio: '14 USD',
    formato: 'Tapa blanda',
    isbn: '978-0486278070',
    descripcion: 'La historia de un joven que vende su alma para mantener su juventud eterna.',
    estado: 'Nuevo',
    ubicacion: 'Irlanda',
    fecha_publicacion: 1890,
    editorial: 'Torre de papel',
    paginas: '254',
    dimensiones: '13 x 1.5 x 20 cm',
    peso: '210g',
    },
        
    {
    titulo: 'Frankenstein',
    autor: 'Mary Shelley',
    genero: 'ficcion',
    idioma: 'Inglés',
    precio: '16 USD',
    formato: 'Tapa blanda',
    isbn: '978-0486282114',
    descripcion: 'La historia del científico Victor Frankenstein y su monstruosa creación.',
    estado: 'Nuevo',
    ubicacion: 'Reino Unido',
    fecha_publicacion: 1818,
    editorial: 'Torre de papel',
    paginas: '280',
    dimensiones: '13 x 1.8 x 20 cm',
    peso: '230g',
    },
        
    {
    titulo: 'Dracula',
    autor: 'Bram Stoker',
    genero: 'ficcion',
    idioma: 'Inglés',
    precio: '18 USD',
    formato: 'Tapa blanda',
    isbn: '978-0486411094',
    descripcion: 'La historia del conde Drácula y su intento de mudarse de Transilvania a Inglaterra para esparcir la maldición de los no-muertos.',
    estado: 'Nuevo',
    ubicacion: 'Rumania',
    fecha_publicacion: 1897,
    editorial: 'Archibald Constable and Company',
    paginas: '418',
    dimensiones: '13 x 2.5 x 20 cm',
    peso: '370g',
    },
    ];

    let librosListado = libros.map(libro => ({
        Titulo: libro.titulo,
        Autor: libro.autor,
        Editorial: libro.editorial,
        Precio: libro.precio
    }));
    
    let librosConDescuento = [];
    for (let i = 0; i < 10; i++) {
        let iteracion = libros.map(libro => {
            let precioOriginal = parseFloat(libro.precio.replace(' USD', ''));
            let descuento = 0.20;
            let precioConDescuento = (precioOriginal * (1 - descuento)).toFixed(2) + ' USD';
            return {
                Titulo: libro.titulo,
                Autor: libro.autor,
                Editorial: libro.editorial,
                Precio: libro.precio,
                Descuento: '20%',
                'Precio con Descuento': precioConDescuento
            };
        });
        librosConDescuento.push(iteracion);
    }
    
    function mostrarLibros() {
        console.log('Lista de libros:');
        libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo}`);
        });
    }
    
    function mostrarLibrosConDescuento() {
        librosConDescuento.forEach((iteracion, index) => {
            console.log(`Iteración ${index + 1}:`);
            console.table(iteracion);
        });
    }
    
    function mostrarResumen() {
        let librosMayor50 = libros.filter(libro => parseFloat(libro.precio.replace(' USD', '')) > 20);
        let librosPorPaginas = libros.map(libro => ({
            Titulo: libro.titulo,
            Autor: libro.autor,
            Editorial: libro.editorial,
            Paginas: libro.paginas
        })).sort((a, b) => b.Paginas - a.Paginas);
    
        console.log('Libros con precio mayor a 20 USD:');
        console.table(librosMayor50.map(libro => ({
            Titulo: libro.titulo,
            Autor: libro.autor,
            Editorial: libro.editorial,
            Precio: libro.precio
        })));
    
        console.log('Libros ordenados por número más alto de páginas:');
        console.table(librosPorPaginas);
    }
    
    function mostrarResumenExtendido() {
        let librosCaros = libros.filter(libro => parseFloat(libro.precio.replace(' USD', '')) > 11)
            .map(libro => ({
                Titulo: libro.titulo,
                Autor: libro.autor,
                Precio: libro.precio
            }));
    
        let librosMenos100Paginas = libros.filter(libro => parseInt(libro.paginas) < 100)
            .map(libro => ({
                Titulo: libro.titulo,
                Autor: libro.autor,
                Editorial: libro.editorial,
                Paginas: libro.paginas
            }));
    
        let librosCarosMayor20 = libros.filter(libro => parseFloat(libro.precio.replace(' USD', '')) > 20)
            .map(libro => ({
                Titulo: libro.titulo,
                Autor: libro.autor,
                Precio: libro.precio
            }))
            .sort((a, b) => parseFloat(b.Precio.replace(' USD', '')) - parseFloat(a.Precio.replace(' USD', '')));
    
        let librosPorPaginasMayorMenor = libros.map(libro => ({
            Titulo: libro.titulo,
            Autor: libro.autor,
            Editorial: libro.editorial,
            Paginas: libro.paginas
        })).sort((a, b) => parseInt(b.Paginas) - parseInt(a.Paginas));
    
        console.log('Libros caros (mayores de 11 USD):');
        console.table(librosCaros);
    
        console.log('Libros con menos de 100 páginas:');
        console.table(librosMenos100Paginas);
    
        console.log('Libros caros (mayores de 20 USD) ordenados de mayor a menor:');
        console.table(librosCarosMayor20);
    
        console.log('Libros ordenados por número más alto de páginas:');
        console.table(librosPorPaginasMayorMenor);
    }
    
    let salir = false;
    while (!salir) {
        let opcion = prompt('Ingrese una opción: 1. Ver libros, 2. Agregar libro, 3. Salir, 4. Mostrar pila, 5. Mostrar resumen de este segmento, 6. Mostrar resumen extendido');
        switch (opcion) {
            case '1':
                mostrarLibros();
                console.log('Listado de libros (Título, Autor, Editorial, Precio):');
                console.table(librosListado);
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
                    paginas: prompt('Ingrese el número de páginas del libro:')
                };
                libros.push(nuevoLibro);
                break;
            case '3':
                salir = true;
                break;
            case '4':
                mostrarLibrosConDescuento();
                break;
            case '5':
                mostrarResumen();
                break;
            case '6':
                mostrarResumenExtendido();
                break;
            case '7':
              default:
                console.log('opcion no valida');
            }
        };