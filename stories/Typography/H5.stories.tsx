import { ComponentMeta, ComponentStory } from "@storybook/react";
import { H5 } from "@ui/index";
import { ComponentProps } from "react";

export default {
	title: "Typography/Title/H5",
	component: H5
} as ComponentMeta<typeof H5>;

const Template = (args: ComponentProps<typeof H5>) => <H5 {...args} />;

export const Default: ComponentStory<typeof H5> = Template.bind({});

Default.args = {
	children: "Title H5"
};
