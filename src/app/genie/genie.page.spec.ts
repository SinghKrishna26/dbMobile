import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GeniePage } from './genie.page';

describe('GeniePage', () => {
  let component: GeniePage;
  let fixture: ComponentFixture<GeniePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeniePage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GeniePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
