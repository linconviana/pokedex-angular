import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private pokeApiService : PokeApiService
  ){}

  ngOnInit(): void{
    this.pokeApiService.apiListAllPockemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        this.isLoading = true
        console.log(this.getAllPokemons)
      },
      error =>{
        this.apiError = true
        return error
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter((res: any) =>{
      return !res.name.indexOf(value.toLowerCase())
    });

    this.getAllPokemons = filter;
  }

  public nextPage(value: number){

    this.pokeApiService.updateUrl(value).subscribe(
      res => {
        this.setAllPokemons = [];
        this.getAllPokemons = this.setAllPokemons;

        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        this.isLoading = true
      },
      error =>{
        this.apiError = true
        return error
      }
    );
  }
}
