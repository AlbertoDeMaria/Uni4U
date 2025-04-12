import { Component, ElementRef, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0.25rem)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(0.25rem)' }))
      ])
    ])
  ]
})
export class HeaderComponent {
  productDropdownOpen = false;
  companyDropdownOpen = false;
  mobileMenuOpen = false;

  constructor(private _eref: ElementRef) {}

  toggleProductDropdown(): void {
    this.productDropdownOpen = !this.productDropdownOpen;
    if (this.productDropdownOpen) {
      this.companyDropdownOpen = false;
    }
  }

  toggleCompanyDropdown(): void {
    this.companyDropdownOpen = !this.companyDropdownOpen;
    if (this.companyDropdownOpen) {
      this.productDropdownOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeAll(): void {
    this.productDropdownOpen = false;
    this.companyDropdownOpen = false;
    this.mobileMenuOpen = false;
  }

  onLinkClick(): void {
    this.closeAll();
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event): void {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.closeAll();
    }
  }
}
