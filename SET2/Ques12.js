//function takes an array of objects containing bollywood movies information (title, director,year,rating)and
//  return an array with only the movie title that were made before 1990 and has a rating above 8.0
const movies=[
    {title:'sholay', director:'ramesh', year:1975, rating: 8.2},
    {title:'amar akbar anthony', director:'manmohan', year:1977, rating: 7.2},
    {title:'namak halaal', director:'prakash', year:1982, rating: 8.1},
    {title:'mr. india', director:'shekhar', year:1987, rating: 7.8},
    {title:'parinda', director:'vidhu', year:1989, rating: 6.2},
    {title:'dil', director:'indra kumar', year:1990, rating: 7.8},
]
const bollywoodMovies=movies.filter((bollywood)=>bollywood.year<1990 && bollywood.rating >8.0) ;
console.log(bollywoodMovies.map((item)=>item.title));
