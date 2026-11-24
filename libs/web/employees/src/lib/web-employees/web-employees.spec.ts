import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebEmployees } from './web-employees';

describe('WebEmployees', () => {
  let component: WebEmployees;
  let fixture: ComponentFixture<WebEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebEmployees]
    }).compileComponents();

    fixture = TestBed.createComponent(WebEmployees);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
