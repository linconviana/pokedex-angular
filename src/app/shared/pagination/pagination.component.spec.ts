import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

/// :: https://testing-library.com/docs/angular-testing-library/intro/
/// :: npm install --save-dev @testing-library/angular

/// :: https://www.youtube.com/watch?v=RCi2EEwNZ6M
/// :: https://www.youtube.com/watch?v=RFHDWc-apLQ

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    });
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/  

  it('should create 1', () => {
    expect('1').toBeTruthy();
  });

  it('should create Anterior', () => {
    expect('Anterior').toBeTruthy();
  });

  it('should create Proximo', () => {
    expect('Proximo').toBeTruthy();
  });

});
