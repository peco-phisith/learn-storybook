import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI Components/Button",
  component: Button,
  argTypes: {
    type: { control: "radio" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
