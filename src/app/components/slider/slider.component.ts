import { TranslateService } from '@ngx-translate/core';
import { Component } from "@angular/core";
import { SliderListInterface } from '@interfaces/slider-list.interface';

@Component({
  selector: 'slider-component',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  public sliderList: SliderListInterface[] = [{
    ...this.transalte.instant('slider.one'),
    img:'assets/imgs/slider-img.png'
  }];

  constructor ( private transalte: TranslateService) { }
}
