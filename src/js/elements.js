import $ from 'jquery';

const createElement = (tag, css) => $(document.createElement(tag)).addClass(css);

const Div = (css) => createElement('div', css);
const Span = (css) => createElement('span', css);
const Button = (css) => createElement('button', css);
const Input = (css) => createElement('input', css);
const Label = (css) => createElement('label', css);
const Img = (css) => createElement('img', css);
const Link = (css, href) => {
    const element = createElement('a', css)
    element.attr('href', href);
    element.attr('target', '_blank');
    return element;
}
const Aside = (css) => createElement('aside', css)
const Ul = (css) => createElement('ul', css);
const Li = (css) => createElement('li', css);

const Icon = (css, href) => {
    const spriteUrl = `./sprite.svg#${href}`;
    
    const svgElement = $(document.createElementNS('http://www.w3.org/2000/svg', 'svg')).addClass(css);
    const useElement = $(document.createElementNS('http://www.w3.org/2000/svg', 'use')).attr('href', spriteUrl);
    svgElement.append(useElement);

    return svgElement;
};

const IconLink = (css, href, url) => {
    const icon = Icon(css, href);
    const link = Link(css, url);
    link.append(icon);
    return link;
}

const ListLink = (css, href) => {
    const link = Link(css, href); 
    const item = Li(''); 
    item.append(link); 
    return item;
}


export { Div, Span, Button, Input, Label, Img, Link, Icon, Aside, Ul, Li, IconLink, ListLink };
