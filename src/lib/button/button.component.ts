import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Directive } from '@angular/core';

const BUTTON_HOST_ATTRIBUTES = [
  'tpc-button',
  'tpc-button-cta',
  'tpc-button-quiet',
  'tpc-button-large',
  'tpc-button-large-quiet',
  'tpc-button-cta',
  'tpc-button-large-cta'
];

@Component({
  selector: `button[tpc-button], button[tpc-button-cta], button[tpc-button-quiet], button[tpc-button-large],
    button[tpc-button-large-quiet], button[tpc-button-cta], button[tpc-button-large-cta]
  `,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  exportAs: 'tcpButton',
  host: {
    '[disabled]': 'disabled || null',
  },
  inputs: ['disabled', 'color'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TpcButton implements OnInit {

  constructor(public elementRef: ElementRef) {
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (elementRef.nativeElement as HTMLElement).classList.add(attr);
      }
    }
  }

  ngOnInit() {
    console.log('eeer');
  }

  _getHostElement() {
    return this.elementRef.nativeElement;
  }

  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

}
