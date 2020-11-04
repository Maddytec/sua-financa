import { Component, Input, OnInit } from '@angular/core';

interface BreadCrumpItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-bread-crump',
  templateUrl: './bread-crump.component.html',
  styleUrls: ['./bread-crump.component.css']
})
export class BreadCrumpComponent implements OnInit {

  @Input() itens: Array<BreadCrumpItem> = []

  constructor() { }

  ngOnInit(): void {
  }

  isTheLastItem(item: BreadCrumpItem): boolean{
    const index = this.itens.indexOf(item);
    return index == this.itens.length - 1;
  }

}
