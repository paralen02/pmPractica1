import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Advisory } from 'src/app/models/advisory';
import { AdvisoryService } from 'src/app/services/advisory.service';

@Component({
  selector: 'app-creaedita-advisory',
  templateUrl: './creaedita-advisory.component.html',
  styleUrls: ['./creaedita-advisory.component.css']
})
export class CreaeditaAdvisoryComponent {
  form: FormGroup = new FormGroup({});
  advisory: Advisory = new Advisory();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  tipos: { value: string; viewValue: string }[] = [
    { value: 'Tributarias', viewValue: 'Tributarias' },
    { value: 'Internacionales', viewValue: 'Internacionales' },
    { value: 'Sociales', viewValue: 'Sociales' },
  ];
  cantidades: { value: number; viewValue: number }[] = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
    { value: 5, viewValue: 5 },
  ];
  constructor(
    private dS: AdvisoryService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idAdvisory: [''],
      nameAdvisory: ['', Validators.required],
      typeAdvisory: ['', Validators.required],
      priceAdvisory: ['', Validators.required],
      quantityAdvisory: ['', Validators.required],
      rateAdvisory: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.advisory.idAdvisory = this.form.value.idAdvisory;
      this.advisory.nameAdvisory = this.form.value.nameAdvisory;
      this.advisory.priceAdvisory = this.form.value.priceAdvisory;
      this.advisory.typeAdvisory = this.form.value.typeAdvisory;
      this.advisory.quantityAdvisory = this.form.value.quantityAdvisory;
      this.advisory.rateAdvisory = this.form.value.rateAdvisory;
      if (this.edicion) {
        this.dS.update(this.advisory).subscribe(() => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data);
          });
        });
      } else {
        this.dS.insert(this.advisory).subscribe((data) => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data);
          });
        });
      }
      this.router.navigate(['advisory']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  init() {
    if (this.edicion) {
      this.dS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idAdvisory: new FormControl(data.idAdvisory),
          nameAdvisory: new FormControl(data.nameAdvisory),
          typeAdvisory: new FormControl(data.typeAdvisory),
          quantityAdvisory: new FormControl(data.quantityAdvisory),
          rateAdvisory: new FormControl(data.rateAdvisory),
          priceAdvisory: new FormControl(data.priceAdvisory),
        });
      });
    }
  }
}
