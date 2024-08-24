import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Autos {
  placa: string;
  marca: string;
  color: string;
  precio: number;
}

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  vehiculos: Autos[] = [];
  filtroColor: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Autos[]>('assets/Data/Auto.model.json').subscribe(data => {
      this.vehiculos = data;
    });
  }

  filtrarPorColor(): Autos[] {
    if (!this.filtroColor) {
      return this.vehiculos;
    }
    return this.vehiculos.filter(v => v.color.toLowerCase() === this.filtroColor.toLowerCase());
  }
}
