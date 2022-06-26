import { ComponentMeta, ComponentStory } from "@storybook/react";
import { S2 } from "@ui/index";
import { ComponentProps } from "react";

export default {
	title: "Typography/Subtitle/S2",
	component: S2
} as ComponentMeta<typeof S2>;

const Template = (args: ComponentProps<typeof S2>) => <S2 {...args} />;

export const Default: ComponentStory<typeof S2> = Template.bind({});

Default.args = {
	children: "Subtitle S2"
};
