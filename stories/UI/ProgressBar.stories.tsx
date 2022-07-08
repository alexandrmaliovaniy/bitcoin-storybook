import { ProgressBar } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "UI/ProgressBar",
	component: ProgressBar
} as ComponentMeta<typeof ProgressBar>;

const Template = (args: ComponentProps<typeof ProgressBar>) => <ProgressBar {...args} />;

export const Default: ComponentStory<typeof ProgressBar> = Template.bind({});

Default.args = {
	progress: 20,
	color: "#2D9CDB"
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=133%3A352"
	}
};