import { UToggle } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps, useState } from "react";

export default {
	title: "Form/UToggle",
	component: UToggle
} as ComponentMeta<typeof UToggle>;

const Template = (args: ComponentProps<typeof UToggle>) => <UToggle {...args} />;

export const Default: ComponentStory<typeof UToggle> = Template.bind({});

Default.args = {
	small: false,
	value: false,
	onMutation: (value) => {
		return new Promise<boolean>((resolve) => {
			resolve(true);
		});
	}
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=96%3A2515"
	}
};