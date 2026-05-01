import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSection } from './favorite-section';

describe('FavoriteSection', () => {
  let component: FavoriteSection;
  let fixture: ComponentFixture<FavoriteSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteSection],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
