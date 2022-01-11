import { Component, OnInit } from '@angular/core';
import { PagesListEnum } from 'src/app/enums/pages-list.enum';
import { PagesListInterface } from '@interfaces/pages-list.interface';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public pagesList: PagesListInterface[] = [];

  private ePagesListEnum = PagesListEnum;

  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(): void {
    this.generatePageList();
  }

  private generatePageList(): void {
    this.translate.get('theme.nav').subscribe(textsNav => {
      Object.entries(this.ePagesListEnum).forEach(([key, value]) => {
        this.pagesList.push({
          link: value,
          text: textsNav[key]
        });
      });
    });
  }

}
