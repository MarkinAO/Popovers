import TooltipFactory from "./TooltipFactory";

const btn = document.querySelector('.btn');
const message = {
    title: 'Заголовок',
    text: 'Какой-то текст. Ещё какой-то текст'
}

const tooltip = new TooltipFactory();

btn.addEventListener('click', () => {
    tooltip.showTooltip(message, btn);
})