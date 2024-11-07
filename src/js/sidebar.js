import $ from 'jquery'
import { Tooltip } from './tooltip.js'
import { Div, Aside, Ul, ListLink, IconLink } from './elements.js'

export class Sidebar {
  constructor() {
    this.isActive = false;

    this.menu = Div('menu')
    this.bar1 = Div('bar')
    this.bar3 = Div('bar')
    this.sidebar = Aside('sdb')
    this.linkList = Ul('sdb-list')
    this.homeLink = ListLink('sdb-link', '#home')
    this.aboutLink = ListLink('sdb-link', '#about')
    this.contactLink = ListLink('sdb-link', '#contact')
    this.iconsCtn = Div('sdb-icons')
    this.linkedinLink = IconLink('icon-link', 'linkedin', 'https://www.linkedin.com/in/fab-nascimento/')
    this.githubLink = IconLink('icon-link', 'github', 'https://github.com/FabioMiguelNascimento')

    this.menu.append(this.bar1, this.bar2, this.bar3)
    this.menu.on('click', () => this.toggle())
    this.clickedOutside()

    $('body').append(this.menu, this.sidebar)
    this.sidebar.append(this.linkList)
    this.iconsCtn.append(this.linkedinLink, this.githubLink)
    this.linkList.append(this.homeLink, this.aboutLink, this.contactLink, this.iconsCtn)

    this.homeLink.find('a').text('Home');
    this.aboutLink.find('a').text('Sobre'); 
    this.contactLink.find('a').text('Contato');

    this.linkedinTooltip = new Tooltip({
      target: this.linkedinLink,
      text: 'LinkedIn',
      position: 'bottom'
  });

  this.githubTooltip = new Tooltip({
      target: this.githubLink,
      text: 'GitHub',
      position: 'bottom'
  });
  }

  toggle() {
    this.isActive = !this.isActive
    if (this.isActive) {
      this.open()
    } else {
      this.close()
    }
  }

  open() {
    setTimeout(() => {
      this.sidebar.addClass('active')
      this.menu.addClass('active')
      this.isActive = true
      this.clickedOutside()
    }, 10);
  }

  close() {
    this.sidebar.removeClass('active')
    this.menu.removeClass('active')
    this.isActive = false
    $(document).off('click')
  }

  clickedOutside() {
    $(document).on('click', (e) => {
      if (!$(e.target).closest(this.sidebar).length && !$(e.target).is(this.menu)) {
        this.close()
      }
    });
  }

}