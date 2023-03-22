import GridLayout from "./GridLayout";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../../buttons/mainButton/Button";

export default {
  title: "Layout/GridLayout",
  component: GridLayout,
} as ComponentMeta<typeof GridLayout>;

const Template: ComponentStory<typeof GridLayout> = (args) => (
  <GridLayout {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <>
      <Button title="1" onClick={() => console.log(1)} />
      <Button title="2" onClick={() => console.log(2)} />
      <Button title="3" onClick={() => console.log(3)} />
      <Button title="4" onClick={() => console.log(4)} />
      <Button title="5" onClick={() => console.log(5)} />
      <Button title="6" onClick={() => console.log(6)} />
    </>,
  ],
};
