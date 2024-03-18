import {render, screen} from '@testing-library/react';
import { Button } from './Button';
import { Primary, RedButton } from './Button.stories.js';
import { expect } from '@storybook/test';

test("should render Button", ()=>{
    const label = "Click me";
    render(<Button label={label} />);
    const btnEle = screen.getByRole('button');
    expect(btnEle).toBeInTheDocument();
    expect(btnEle).toHaveTextContent('Click');

})

test("should render Primary Button", ()=>{
    render(<Primary {...Primary.args} />);
    const primaryBtnEle = screen.getByRole('button');
    expect(primaryBtnEle).toHaveClass("storybook-button--primary");
})

test("should render Red Button", ()=>{
    render(<RedButton {...RedButton.args} />);
    const redBtnEle = screen.getByRole('button');
    expect(redBtnEle).toHaveStyle('background-color:red');
})