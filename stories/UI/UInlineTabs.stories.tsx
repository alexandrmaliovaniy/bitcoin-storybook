import { UInlineTabs } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps, useState } from "react";

export default {
	title: "UI/InlineTabs/UInlineTabs",
	component: UInlineTabs
} as ComponentMeta<typeof UInlineTabs>;

const Template = (args: ComponentProps<typeof UInlineTabs>) => <UInlineTabs {...args} />

export const Default: ComponentStory<typeof UInlineTabs> = Template.bind({});

Default.args = {
	tabs: ["Label", "Label", "Label"],
	onMutation: async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return true;
	}
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=137%3A2539"
	}
};