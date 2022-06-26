import { ComponentMeta, ComponentStory } from "@storybook/react";
import { H3 } from "@ui/index";
import { ComponentProps } from "react";

export default {
	title: "Typography/Title/H3",
	component: H3
} as ComponentMeta<typeof H3>;

const Template = (args: ComponentProps<typeof H3>) => <H3 {...args} />;

export const Default: ComponentStory<typeof H3> = Template.bind({});

Default.args = {
	children: "Title H3"
};
