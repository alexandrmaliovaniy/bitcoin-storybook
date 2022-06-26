import { ComponentMeta, ComponentStory } from "@storybook/react";
import { H2 } from "@ui/index";
import { ComponentProps } from "react";

export default {
	title: "Typography/Title/H2",
	component: H2
} as ComponentMeta<typeof H2>;

const Template = (args: ComponentProps<typeof H2>) => <H2 {...args} />;

export const Default: ComponentStory<typeof H2> = Template.bind({});

Default.args = {
	children: "Title H2"
};
