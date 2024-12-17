import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrianguloEquilateroComponent } from './triangulo-equilatero.component';

describe('TrianguloEquilateroComponent', () => {
  let component: TrianguloEquilateroComponent;
  let fixture: ComponentFixture<TrianguloEquilateroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrianguloEquilateroComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrianguloEquilateroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
