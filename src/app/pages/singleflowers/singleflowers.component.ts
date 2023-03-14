import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './singleflowers.component.html',
  styleUrls: ['./singleflowers.component.css']
})
export class SingleflowersComponent {
  constructor(private hero:HeroService){}
    data=this.hero.giveData()
    
    singleflowers:any
    ngOnInit(){
      let id=Number(localStorage.getItem('id'))
      this.singleflowers=this.data.filter(e=> e.id==id)
      console.log("name",this.singleflowers)
    }
  }