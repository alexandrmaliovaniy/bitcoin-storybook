import { ComponentMeta, ComponentStory } from "@storybook/react";
import { H4 } from "@ui/index";
import { ComponentProps } from "react";

export default {
	title: "Typography/Title/H4",
	component: H4
} as ComponentMeta<typeof H4>;

const Template = (args: ComponentProps<typeof H4>) => <H4 {...args} />;

export const Default: ComponentStory<typeof H4> = Template.bind({});

Default.args = {
	children: "Title H4"
};
