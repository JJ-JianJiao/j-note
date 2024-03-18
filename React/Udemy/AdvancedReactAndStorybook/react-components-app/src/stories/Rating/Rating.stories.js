import Rating from "./Rating";

export default{
    title: "Component/Rating",
    component: Rating
};

const Template = (args) => <Rating {...args} />;

export const FiveStars = Template.bind({});
FiveStars.args = {
    number: 5
};