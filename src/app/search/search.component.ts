import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() onClick: EventEmitter<string> = new EventEmitter();

  search: any;

  onClickSearch() {
    this.onClick.emit(this.search)

  }
}
