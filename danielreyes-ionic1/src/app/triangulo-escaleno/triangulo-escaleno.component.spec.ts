import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrianguloEscalenoComponent } from './triangulo-escaleno.component';

describe('TrianguloEscalenoComponent', () => {
  let component: TrianguloEscalenoComponent;
  let fixture: ComponentFixture<TrianguloEscalenoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrianguloEscalenoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrianguloEscalenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
