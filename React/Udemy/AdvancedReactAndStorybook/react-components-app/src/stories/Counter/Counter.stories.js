import Counter from "./Counter";

export default{
    title:'Component/Counter',
    component: Counter
}

const Template = (args) => <Counter {...args}/>

export const Default = Template.bind({})