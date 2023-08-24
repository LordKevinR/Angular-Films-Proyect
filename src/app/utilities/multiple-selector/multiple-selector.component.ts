import { Component, Input } from '@angular/core';
import { MultipleSelectorModel } from './multipleSelectorModel';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent {

  @Input()
  selected: MultipleSelectorModel[] = [];

  @Input()
  noSelected: MultipleSelectorModel[] = [];

  selectAll(){
    this.selected.push(...this.noSelected);
    this.noSelected = [];
  }

  deselectAll(){
    this.noSelected.push(...this.selected);
    this.selected = [];
  }

  select(item: MultipleSelectorModel, index: number) {
    this.selected.push(item);
    this.noSelected.splice(index, 1);
  }

  deselect(item: MultipleSelectorModel, index: number) {
    this.noSelected.push(item);
    this.selected.splice(index, 1);
  }
}
