import { ComponentMeta, ComponentStory } from "@storybook/react";
import { S4 } from "@ui/index";
import { ComponentProps } from "react";

export default {
	title: "Typography/Subtitle/S4",
	component: S4
} as ComponentMeta<typeof S4>;

const Template = (args: ComponentProps<typeof S4>) => <S4 {...args} />;

export const Default: ComponentStory<typeof S4> = Template.bind({});

Default.args = {
	children: "Subtitle S4"
};
