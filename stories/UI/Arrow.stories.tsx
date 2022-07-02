import { Arrow } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "UI/Arrow",
	component: Arrow
} as ComponentMeta<typeof Arrow>;

const Template = (args: ComponentProps<typeof Arrow>) => <Arrow {...args} />;

export const Default: ComponentStory<typeof Arrow> = Template.bind({});

Default.args = {
	incoming: false,
	size: "medium"
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=96%3A2628"
	}
};