import { RadioButton } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "Form/RadioButton",
	component: RadioButton
} as ComponentMeta<typeof RadioButton>;

const Template = (args: ComponentProps<typeof RadioButton>) => <RadioButton {...args} />;

export const Default: ComponentStory<typeof RadioButton> = Template.bind({});

Default.args = {
	children: "Label",
	value: false
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=96%3A2502"
	}
};