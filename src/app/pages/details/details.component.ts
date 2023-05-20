import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public pokemon: any;
  public isLoading: boolean = false;
  public apiError: boolean = false;

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ){}

  ngOnInit(): void{
    //this.getPokemon - erro em produção;
    this.getPokemon();
  }

  /// :: get getPokemon(){ - erro em produção;
  public getPokemon(){

    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res
        this.isLoading = true
      },
      error => {
        this.apiError = true
        return error
      }
    )
  }
}
