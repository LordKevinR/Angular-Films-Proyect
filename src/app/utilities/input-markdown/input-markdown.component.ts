import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {
  @Input()
  markdownContent = '';

  @Input()
  placeHolderTextarea: string = 'Text';

  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>();

}
