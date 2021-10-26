import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  @Output() onClick: EventEmitter<string> = new EventEmitter();

  @ViewChild('titleInput') inputRef: ElementRef

  search: any;
//(localStorage.getItem('search'))

  ngOnInit() {
    //this.inputRef.nativeElement.attribute.value('1')
  }

  onClickSearch() {
    this.onClick.emit(this.search)

  }
}
