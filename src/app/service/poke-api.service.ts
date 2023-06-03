import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
/// :: https://pokeapi.co/docs/v2
/// :: https://pokeapi.co/api/v2/pokemon
/// :: https://pokeapi.co/api/v2/pokemon?offset=0&limit=100


  private pageSize = 48;
  private pageNumber = 0;
  private url: string = `https://pokeapi.co/api/v2/pokemon?offset=${this.pageNumber}&limit=${this.pageSize}`;

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPockemons():Observable<any>{

    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map( (resPokemons: any) =>{

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          )
        })
      })
    )
  }

  public apiGetPokemons(url : string) :Observable<any>{
    return this.http.get<any>(url).pipe(
      map(res => res)
    )
  }

  public updateUrl(number: number){
    this.pageNumber = number;
    this.url = `https://pokeapi.co/api/v2/pokemon?offset=${this.pageNumber}&limit=${this.pageSize}`;
    return this.apiListAllPockemons;
  }
}
