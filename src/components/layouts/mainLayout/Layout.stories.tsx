import Layout from "./Layout";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Layout/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <div className="h-full w-full bg-warning-content text-white text-center rounded-lg shadow-lg">
      Your content
    </div>,
  ],
};
