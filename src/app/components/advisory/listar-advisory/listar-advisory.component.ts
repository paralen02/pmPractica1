import { Advisory } from 'src/app/models/advisory';
import { AdvisoryService } from 'src/app/services/advisory.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-advisory',
  templateUrl: './listar-advisory.component.html',
  styleUrls: ['./listar-advisory.component.css']
})
export class ListarAdvisoryComponent implements OnInit{
  dataSource: MatTableDataSource<Advisory> = new MatTableDataSource();
  displayedColumns: string[] = [
    'codigo',
    'asesoria',
    'tipo',
    'precio',
    'cantidad',
    'tasa',
    'monto',
    'accion01',
    'accion02',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private aS: AdvisoryService) {}
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.aS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe((data) => {
      this.aS.list().subscribe((data) => {
        this.aS.setList(data);
      });
    });
  }
  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
  calcularMontoTotal(advisory: Advisory): number {
    return advisory.quantityAdvisory * (advisory.priceAdvisory + advisory.priceAdvisory * advisory.rateAdvisory);
  }
}
