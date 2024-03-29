import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigimonListPage } from './digimon-list.page';

describe('DigimonListPage', () => {
  let component: DigimonListPage;
  let fixture: ComponentFixture<DigimonListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DigimonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
