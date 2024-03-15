import encriptador from '@/app/UI/assets/encriptador.png'
import spring from '@/app/UI/assets/springdatajpa.png';
import eggnews from '@/app/UI/assets/eggnews.png';
import battlebame from '@/app/UI/assets/battlegame.png';
import testapp from '@/app/UI/assets/testapp.png'
import appsalud from '@/app/UI/assets/appSalud.png'
import crudMovie from '@/app/UI/assets/crudmovie.png'

export const all_projects = [
    {
        name_es : 'Encriptador Desafio Alura Latam',
        name_en : 'Encrypted challenge Alura Latam',
        url : 'https://j0k3r-rg.github.io/desafio-latam-encriptador/',
        github : 'https://github.com/J0k3r-rg/desafio-latam-encriptador',
        image : encriptador,
        alt : 'encriptador',
        tecnologies : ['HTML5', 'CSS', 'JavaScript']
    },{
        name_es : 'Sitio de noticias Egg',
        name_en : 'Eggnews Newsppapper',
        url : 'https://mauriciomaldonadoprg.store/eggnews',
        github : 'https://github.com/j0k3r-PGR/eggnews',
        image : eggnews,
        alt : 'eggnews',
        tecnologies : ['Java', 'MySQL','SpringDataJpa', 'Spring Security', 'JWT', 'Reactjs', 'Html','Css','Javascript']
    },{
        name_es : 'Batalla naval',
        name_en : 'Battle Naval',
        url : 'https://battlenaval-j0k3r-pgr.netlify.app/',
        github : 'https://github.com/j0k3r-PGR/battleNaval',
        image : battlebame,
        alt : 'Battle Game',
        tecnologies : ['Reactjs','Html','Css','Javascript']
    },{
        name_es : 'Ejemplo Spring Data JPA',
        name_en : "Example for Spring Data JPA",
        url : null,
        github : 'https://github.com/J0k3r-rg/springdatajpa',
        image : spring,
        alt : 'spring data jpa',
        tecnologies : ['Java', 'MySQL','SpringDataJpa']
    },{
        name_es : 'Aplicacion para solicitar turnos medicos',
        name_en : "App Services Medic",
        url : null,
        github : 'https://github.com/J0k3r-rg/AppServiciosDeSalud',
        image : appsalud,
        alt : 'servicios salud',
        tecnologies : ['Java8', 'MySQL','SpringDataJpa', 'JWT','Spring Security','Thymeleaft','Html','Css','Javascript']
    },{
        name_es : 'Prueba con aplicacion de react',
        name_en : "Test React App",
        url : 'https://test-site-joker.netlify.app/',
        github : 'https://github.com/j0k3r-PGR/miWebPersonal',
        image : testapp,
        alt : 'Test App React',
        tecnologies : ['Reactjs','Html','Css','Javascript']
    },{
        name_es : 'API REST- CRUD MOVIE',
        name_en : "API REST- CRUD MOVIE",
        url : null,
        github : 'https://github.com/J0k3r-rg/crud-movies',
        image : crudMovie,
        alt : 'Crud movie',
        tecnologies : ['Java17', 'Spring', 'Data H2', 'SpringDataJpa', 'Spring Security','JWT', 'Spring web']
    },
]