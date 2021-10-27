import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  @Output() onClick: EventEmitter<string> = new EventEmitter();

  @ViewChild('titleInput', {static: true}) inputRef: ElementRef

  public search: string;
  private value: string = localStorage.getItem('search')

  ngOnInit() {
    this.search = this.value
  }

  onClickSearch() {
    this.onClick.emit(this.search)
  }

  onClickRemove() {
    this.search = ''
  }
}
