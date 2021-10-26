import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  @Output() onClick: EventEmitter<string> = new EventEmitter();

  @ViewChild('titleInput', {static: true}) inputRef: ElementRef

  search: any;
  value: string = localStorage.getItem('search')

  ngOnInit() {
    this.inputRef.nativeElement.value = this.value

  }

  onClickSearch() {
    this.onClick.emit(this.search)

  }
}
