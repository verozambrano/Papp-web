import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 interface Auto{
  placa:string;
  marca: string;
  color:string;
  precio:number;
 }
@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent implements OnInit{
  vehiculos: Auto[] = [];
  placaBusqueda: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Auto[]>('assets/vehiculos.json').subscribe(data => {
      this.vehiculos = data;
    });
  }

  buscarPorPlaca(): Auto[] {
    if (!this.placaBusqueda) {
      return this.vehiculos;
    }
    return this.vehiculos.filter(v => v.placa.toLowerCase().includes(this.placaBusqueda.toLowerCase()));
  }

  eliminarVehiculo(placa: string): void {
    this.vehiculos = this.vehiculos.filter(v => v.placa !== placa);
  }

  editarVehiculo(vehiculo: Auto): void {
    
  }
}
