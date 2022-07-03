import { Button } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { IUI } from "@ui/Interface";

export default {
	title: "UI/Button/CButton",
	component: Button,
	argTypes: {
		type: {
			control: "select",
			options: ["filled", "outlined", "text"]
		},
		size: {
			control: "select",
			options: ["big", "medium", "small"]
		}
	}
} as ComponentMeta<typeof Button>;

const Template = (args: ComponentProps<typeof Button>) => <Button {...args} />;

export const Filled: ComponentStory<typeof Button> = Template.bind({});

Filled.args = {
	children: "Button",
	type: "filled",
	size: "medium",
	disabled: false,
	cancel: false
};

Filled.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=337%3A5174"
	}
};


export const Outlined: ComponentStory<typeof Button> = Template.bind({});

Outlined.args = {
	children: "Button",
	type: "outlined",
	size: "medium",
	disabled: false,
	cancel: true
};

Outlined.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=337%3A5174"
	}
};


export const Text: ComponentStory<typeof Button> = Template.bind({});

Text.args = {
	children: "Button",
	type: "text",
	size: "medium",
	disabled: false,
	back: false,
	forward: false
};

Text.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=337%3A5174"
	}
};

