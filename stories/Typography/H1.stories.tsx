import { ComponentMeta, ComponentStory } from "@storybook/react";
import { H1 } from "@ui/index";
import { ComponentProps } from "react";

export default {
	title: "Typography/Title/H1",
	component: H1
} as ComponentMeta<typeof H1>;

const Template = (args: ComponentProps<typeof H1>) => <H1 {...args} />;

export const Default: ComponentStory<typeof H1> = Template.bind({});

Default.args = {
	children: "Title H1"
};
