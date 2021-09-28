import { Component, OnInit } from '@angular/core';
import { ScanService } from 'src/app/services/scan/scan.service';

@Component({
  selector: 'app-scansello',
  templateUrl: './scansello.page.html',
  styleUrls: ['./scansello.page.scss'],
})
export class ScanselloPage implements OnInit {
  displayedImage = '../assets/login_image.png';

  // tag = null;
  // patente = null;
  // empresa = null;
  // estado = null;
  // fecha_exp = null;
  // gerencia = null;

  constructor(private scanService: ScanService) { }

  ngOnInit() {

    // this.scanService.getTag(this.tag).subscribe(tag => {
    //   console.log(tag)
    // })
  }

}
