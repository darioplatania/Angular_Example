import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoProdottiComponent } from './elenco-prodotti.component';

describe('ElencoProdottiComponent', () => {
  let component: ElencoProdottiComponent;
  let fixture: ComponentFixture<ElencoProdottiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoProdottiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoProdottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
