import Navbar from "./Navbar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI Components/Navbar", // section and title name
  component: Navbar, // component to display
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

// below here, these are the story cases that
// we can set base on the props of the componenets
export const Default = Template.bind({});
Default.args = { title: "Pecgo" };

export const TitleCenter = Template.bind({});
TitleCenter.args = { title: "Pecgo", position: "center" };

export const TitleEnd = Template.bind({});
TitleEnd.args = { title: "Pecgo", position: "end" };
