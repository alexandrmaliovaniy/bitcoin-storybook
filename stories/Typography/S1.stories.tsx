import { ComponentMeta, ComponentStory } from "@storybook/react";
import { S1 } from "@ui/index";
import { ComponentProps } from "react";

export default {
	title: "Typography/Subtitle/S1",
	component: S1
} as ComponentMeta<typeof S1>;

const Template = (args: ComponentProps<typeof S1>) => <S1 {...args} />;

export const Default: ComponentStory<typeof S1> = Template.bind({});

Default.args = {
	children: "Subtitle S1"
};
