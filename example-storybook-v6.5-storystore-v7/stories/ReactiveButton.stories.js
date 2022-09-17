import {
  screen
} from '@testing-library/dom'

import userEvent from '@testing-library/user-event'

import { createInteractiveButton } from './ReactiveButton';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Example/ReactiveButton',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createInteractiveButton({ label, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  label: 'ClickMe',
};

Primary.play = async () => {


  await new Promise(resolve => {
    setTimeout(resolve, 100)
  })

  const user = userEvent.setup()

  const button = await screen.findByRole('button', {
    name: /clickme/i
  });

  await user.click(button);
}
