import { Component, Output, EventEmitter, Input } from '@angular/core';
import { toBase64 } from '../helpers';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent {

  imageBase64: string;

  @Input()
  actualImageURL: string;

  @Output()
  selectedFile: EventEmitter<File> = new EventEmitter<File>();

  change(event) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      toBase64(file).then((value: string) => this.imageBase64 = value)
      .catch(err => console.log(err))

      this.selectedFile.emit(file);
      this.actualImageURL = null;

    }
  }
}
