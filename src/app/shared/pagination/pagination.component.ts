import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() public emitNextPage: EventEmitter<number> = new EventEmitter();
  public numberPage = 1;
  public sizePage = 0;
  public blockButton = {first: true, last: false};

  constructor(){}

  ngOnInit(): void {   
  }

  public changePage(local: string){

    this.numberPage = local === 'proximo' ? this.numberPage += 1 : this.numberPage -= 1;
    this.sizePage = local === 'proximo' ? this.sizePage += 48  : this.sizePage -= 48;

    if(this.numberPage > 1)
      this.blockButton.first = false;
    else
      this.blockButton.first = true;
      
    this.emitNextPage.emit(this.sizePage);
  }
}
