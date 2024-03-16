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