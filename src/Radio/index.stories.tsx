import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from './index';

export default {
  title: 'Example/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const RadioTest = Template.bind({});

RadioTest.args = {
  className : '',
  children: 'Radio',
  checked: false,
  defaultChecked: false,
  disabled: false
};

export const Basic = () => {
  return <>
    <Radio onChange={(e:any) => {
      console.log("e========", e)
    }}>Radio事件</Radio>
  </>
} 

