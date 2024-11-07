import { Div, Span } from './elements.js';
import $ from 'jquery';

export class Tooltip {
    constructor(config) {
        this.config = {
            target: null,
            text: '',
            position: 'top',
            ...config
        };
       
        this.tooltip = Div('tooltip');
        this.tooltipText = Span('tooltip-text');
        this.tooltip.append(this.tooltipText);
       
        this.init();
    }

    init() {
        if (!this.config.target) {
            console.error('Tooltip target is required');
            return;
        }

        this.setTarget(this.config.target);
        this.setText(this.config.text);
        this.setPosition(this.config.position);
       
        this.config.target.on("mouseenter", () => this.show());
        this.config.target.on("mouseleave", () => this.hide());
       
        this.hide();
       
        return this.tooltip;
    }

    setTarget(target) {
        this.config.target = $(target);
        // Cria um wrapper para o target se ainda não existir
        if (!this.config.target.parent().hasClass('tooltip-wrapper')) {
            this.config.target.wrap(Div('tooltip-wrapper'));
        }
        // Insere o tooltip dentro do wrapper
        this.tooltip.insertAfter(this.config.target);
    }

    setText(text) {
        this.tooltipText.text(text);
    }

    setPosition(position) {
        this.tooltip.removeClass('top bottom left right');
        this.tooltip.addClass(position);
    }

    show() {
        this.tooltip.addClass('visible');
    }

    hide() {
        this.tooltip.removeClass('visible');
    }
}