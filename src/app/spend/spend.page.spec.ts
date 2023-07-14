import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpendPage } from './spend.page';

describe('SpendPage', () => {
  let component: SpendPage;
  let fixture: ComponentFixture<SpendPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
