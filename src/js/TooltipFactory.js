export default class TooltipFactory {
    constructor() {
        this._tooltips = [];
    }

    showTooltip(message, element) {
        if(element.getAttribute('data-tooltip-id')) {
            this._tooltips.forEach(el => el.element.remove())
            element.removeAttribute('data-tooltip-id');
            return
        }

        const tooltipElement = document.createElement('div');
        tooltipElement.classList.add('tooltip');

        const tooltipTitle = document.createElement('div');
        tooltipTitle.classList.add('tooltipTitle');
        tooltipTitle.textContent = message.title;

        const tooltipText = document.createElement('div');
        tooltipText.classList.add('tooltipText');
        tooltipText.textContent = message.text;

        const id = performance.now();
        element.setAttribute('data-tooltip-id', id)

        this._tooltips.push({
            id,
            element: tooltipElement
        })        

        element.appendChild(tooltipElement);
        tooltipElement.appendChild(tooltipTitle);
        tooltipElement.appendChild(tooltipText);

        const { left, top } = element.getBoundingClientRect();

        tooltipElement.style.left = left + element.offsetWidth / 2 - tooltipElement.offsetWidth / 2 + 'px';
        tooltipElement.style.top = top - tooltipElement.offsetHeight - 7 + 'px';
       
        return id;
    }

    removeTooltip(id) {
        const tooltip = this._tooltips.find(t => t.id === id);

        tooltip.element.remove();

        this._tooltips = this._tooltips.filter(t => t.id !== id);
    }
}