import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './singleherbss.component.html',
  styleUrls: ['./singleherbss.component.css']
})
export class SingleherbssComponent {
  constructor(private hero:HeroService){}
    data=this.hero.giveData()
    
    singleherbss:any
    ngOnInit(){
      let id=Number(localStorage.getItem('id'))
      this.singleherbss=this.data.filter(e=> e.id==id)
      console.log("name",this.singleherbss)
    }
  }
