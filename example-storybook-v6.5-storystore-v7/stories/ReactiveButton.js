import './button.css';

import { createButton } from './Button'

export const createInteractiveButton = (props) => {
    const btn = createButton({
        ...props,
        onClick: () => {
            console.log('HUHUHUH')
            btn.innerHTML = 'I was clicked'
            props.onClick();
        }
    });

    return btn;
};
