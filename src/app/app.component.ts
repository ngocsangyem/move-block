import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-move-block';

  addClassLeft(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const parentTarget = target.parentNode;
    const classAttr = parentTarget.attributes.class;
    const classValue = classAttr.nodeValue;

    if (parentTarget.classList.contains('block-move-x-center')) {
      parentTarget.classList.remove('block-move-x-center');
      parentTarget.classList.add('block-move-x-left');
    } else {
      parentTarget.classList.remove('block-move-x-left');
      parentTarget.classList.remove('block-move-x-right');
      parentTarget.classList.add('block-move-x-center');
    }
  }
  addClassRight(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const parentTarget = target.parentNode;
    const classAttr = parentTarget.attributes.class;
    const classValue = classAttr.nodeValue;

    if (parentTarget.classList.contains('block-move-x-center')) {
      parentTarget.classList.remove('block-move-x-center');
      parentTarget.classList.add('block-move-x-right');
    } else {
      parentTarget.classList.remove('block-move-x-right');
      parentTarget.classList.remove('block-move-x-left');
      parentTarget.classList.add('block-move-x-center');
    }
  }

  addClassTop(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const parentTarget = target.parentNode;
    const classAttr = parentTarget.attributes.class;
    const classValue = classAttr.nodeValue;

    if (parentTarget.classList.contains('block-move-y-center')) {
      parentTarget.classList.remove('block-move-y-center');
      parentTarget.classList.add('block-move-y-top');
    } else {
      parentTarget.classList.remove('block-move-y-top');
      parentTarget.classList.remove('block-move-y-bottom');
      parentTarget.classList.add('block-move-y-center');
    }
  }
  addClassBottom(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const parentTarget = target.parentNode;
    const classAttr = parentTarget.attributes.class;
    const classValue = classAttr.nodeValue;

    if (parentTarget.classList.contains('block-move-y-center')) {
      parentTarget.classList.remove('block-move-y-center');
      parentTarget.classList.add('block-move-y-bottom');
    } else {
      parentTarget.classList.remove('block-move-y-top');
      parentTarget.classList.remove('block-move-y-bottom');
      parentTarget.classList.add('block-move-y-center');
    }
  }
}
