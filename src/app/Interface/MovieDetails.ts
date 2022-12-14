export interface MovieDetail{
    backdropUrl: string,
    budget: number,
    createdBy: string,
    createdDate: string,
    id: number,
    imdbUrl:string,
    overview: string,
    posterUrl: string,
    price: number,
    releaseDate: Date,
    revenue: number,
    runtime: number,
    tagline: string,
    title: string,
    tmdbUrl: string,
    updateBy:string,
    updatedDate: string,
    genres: any[],
    trailers:any[], 
    casts: any[]
}