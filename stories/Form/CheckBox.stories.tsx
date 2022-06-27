import { CheckBox } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "Form/CheckBox",
	component: CheckBox
} as ComponentMeta<typeof CheckBox>;

const Template = (args: ComponentProps<typeof CheckBox>) => <CheckBox {...args} />;

export const Default: ComponentStory<typeof CheckBox> = Template.bind({});

Default.args = {
	children: "Check",
	value: false
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=96%3A2460"
	}
};