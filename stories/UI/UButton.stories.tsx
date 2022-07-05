import { UButton } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { IUI } from "@ui/Interface";

export default {
	title: "UI/Button/UButton",
	component: UButton,
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
} as ComponentMeta<typeof UButton>;

const Template = (args: ComponentProps<typeof UButton>) => <UButton {...args} />;

export const Filled: ComponentStory<typeof UButton> = Template.bind({});

Filled.args = {
	children: "Button",
	type: "filled",
	size: "medium",
	cancel: false,
	onMutation: () => {
		return new Promise<boolean>((res) => {
			setTimeout(res, 1000);
		});
	}
};

Filled.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=337%3A5174"
	}
};