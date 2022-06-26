import { ComponentMeta, ComponentStory } from "@storybook/react";
import { S5 } from "@ui/index";
import { ComponentProps } from "react";

export default {
	title: "Typography/Subtitle/S5",
	component: S5
} as ComponentMeta<typeof S5>;

const Template = (args: ComponentProps<typeof S5>) => <S5 {...args} />;

export const Default: ComponentStory<typeof S5> = Template.bind({});

Default.args = {
	children: "Subtitle S5"
};
