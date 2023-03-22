import Navbar from "./Navbar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI Components/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = { title: "Pecgo" };

export const TitleCenter = Template.bind({});
TitleCenter.args = { title: "Pecgo", position: "center" };

export const TitleEnd = Template.bind({});
TitleEnd.args = { title: "Pecgo", position: "end" };
