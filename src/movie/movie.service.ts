import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    
    findAll(limit: string){
        return `findAll funciona, limite de ${limit} regitros`
    }
    findMovie(movieId:string){
        return `Pelicula encontrada con el movieId = ${movieId}`;
    }

    createMovie(movie:any){
        console.log(movie)
        return `Creado el registro de la pelicula ${movie} ;`
    }
    updateMovie(movieId:string, movie:any){
        console.log(movie)
        return `Pelicula ${movieId} actualizada en los regitros`
    }
    deleteMovie(movieId:string){

        return `La pelicula ${movieId} ha sido borrada de los regitros`
    }
    }

