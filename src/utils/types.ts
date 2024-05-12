export interface IGenreItem {
    id: number;
    name: string;
}
export interface IDirectorsItem {
    id: number;
    name: string;
    placeOfBirth: string;
    birthday: string;
    image: File | null;
}
export interface IActorsItem {
    id: number;
    name: string;
    placeOfBirth: string;
    birthday: string;
    description: string;
    image: File | null;
}
export interface IMoviesItem {
    id: number;
    description: string;
    slug: string;
    time: string;
    title: string;
    directorId: string;
    age: string;
    year: string;
    country: string;
    image: File | null;
}
export interface ISerialsItem {
    id: number;
    description: string;
    slug: string;
    time: string;
    title: string;
    directorId: string;
    age: string;
    year: string;
    country: string;
    image: File | null;
}
export interface IGenreMovies {
    id: number;
    genreId: string;
    moviesId: string;
    genre_name: string;
    movie_title: string;
    image: string;
}
export interface IGenreSerials {
    id: number;
    genreId: string;
    serialsId: string;
    genre_name: string;
    serial_title: string;
    image: string;
}
export interface ISeasonsItem {
    id: number;
    year: string;
    number: number;
    serialId: number;
    title: string;
}
export interface IEpisodItem {
    id: number;
    description: string;
    path: string;
    seasonId: number;
    title: string;
    time: string;
}
export interface IActorsSerials {
    id: number;
    serialId: string;
    actorId: string;
    actors_name: string;
    serials_title: string;
}
export interface IActorMovies {
    id: number;
    movieId: string;
    actorId: string;
    actors_name: string;
    movie_title: string;
}