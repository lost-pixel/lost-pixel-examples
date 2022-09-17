import './button.css';

import { createButton } from './Button'

export const createInteractiveButton = (props) => {
    const btn = createButton({
        ...props,
        onClick: () => {
            btn.innerHTML = 'I was clicked'
            props.onClick();
        }
    });

    return btn;
};
