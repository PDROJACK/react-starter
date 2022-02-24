export interface Movie {
    backdrop_path: string;
    adult: boolean;
    genre_ids?: (number)[] | null;
    id: number;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface TV {
    backdrop_path: string;
    first_air_date: string;
    genre_ids?: (number)[] | null;
    id: number;
    name: string;
    original_name: string;
    origin_country?: (string)[] | null;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}
