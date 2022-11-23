import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-divgeneral',
  templateUrl: './divgeneral.component.html',
  styleUrls: ['./divgeneral.component.css']
})
export class DivgeneralComponent implements OnInit {

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos();
  }

}