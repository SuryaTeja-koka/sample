import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Surya Teja SevenWonders Tour';
  sevenwonders = [
    {
      name: 'Group Discussion',
      image:
        'C:UsersSURYA TEJADesktopAngularsevenwonderssrcassetsimageschicho.PNG',
      link: '/chichenitza',
    },
    {
      name: 'Birthday Event',
      image:
        'C:UsersSURYA TEJADesktopAngularsevenwonderssrcassetsimagespetra.PNG',
      link: '/petra',
    },
    {
      name: 'Wedding',
      image:
        'C:UsersSURYA TEJADesktopAngularsevenwonderssrcassetsimagesmachhupichhu.PNG',
      link: '/machupicchu',
    },
    {
      name: 'Half Saree Function',
      image:
        'C:UsersSURYA TEJADesktopAngularsevenwonderssrcassetsimagestheromancolosseum.PNG',
      link: '/theromancolosseum',
    },
    {
      name: 'Kitty parties',
      image:
        'C:UsersSURYA TEJADesktopAngularsevenwonderssrcassetsimagesgreatwallofchina.PNG',
      link: '/greatwallofchina',
    },
    {
      name: 'Awards and competitions',
      image:
        'C:UsersSURYA TEJADesktopAngularsevenwonderssrcassetsimageschristtheredeemerstatue.PNG',
      link: '/christtheredeemerstatue',
    },
  ];
}
