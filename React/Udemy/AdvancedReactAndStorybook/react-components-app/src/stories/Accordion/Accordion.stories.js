import Accordion from "./Accordion";

export default{
    title: 'Component/Accordion',
    component: Accordion
}

const Template = (args) => <Accordion {...args}/>

export const MyAccordion = Template.bind({})
MyAccordion.args = {
    data:[
        {
            title:"What is your favorite car brand?",
            content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam quos et illum voluptates, consequatur sequi, qui error fugiat quibusdam repudiandae esse officiis asperiores facilis iusto corporis ratione magni corrupti assumenda!"
        },
        {
            title:"What is your first out country travel?",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem quaerat totam commodi deserunt quasi dolores facere libero asperiores nesciunt facilis, nulla aperiam ut temporibus omnis quam enim, ipsum mollitia."
        },
    ],
};
