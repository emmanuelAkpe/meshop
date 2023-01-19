import { Component } from '@angular/core';

@Component({
  selector: 'eshop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  dropDown = false;
  openNav = false;
  socialMediaIcons = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  dropNavItems = [
    {
      name: 'signIn',
      link: '',
    },
    {
      name: 'signOut',
      link: '',
    },
    {
      name: 'My orders',
      link: '',
    },
  ];

  smallSCreenItems = [
    {
      name: 'Home',
      link: '',
    },
    {
      name: 'Shop',
      link: '/products',
    },
    {
      name: 'Categories',
      link: '',
    },
    {
      name: 'Blog',
      link: '',
    },
  ];
  contactItems = [
    {
      link: '',
      icon: '',
    },
    {
      name: '(+233) -54287-9063',
      link: '#',
      icon: '',
    },
    {
      name: 'No. 20 Aluguntugui Street',
      link: '#',
      icon: '',
    },
  ];
  SocialItems = [
    {
      link: '',
      icon: '/assets/icons/facebook.svg',
    },
    {
      link: '#',
      icon: '/assets/icons/instagram.svg',
    },
    {
      link: '#',
      icon: '/assets/icons/linkedin.svg',
    },
  ];

  toggleNav() {
    this.openNav = !this.openNav;
  }

  toggleDropDown() {
    this.dropDown = !this.dropDown;
    console.log(this.dropDown);
  }
}
