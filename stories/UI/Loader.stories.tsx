import { Loader } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "UI/Loader",
	component: Loader
} as ComponentMeta<typeof Loader>;

const Template = (args: ComponentProps<typeof Loader>) => <Loader {...args} />;

export const Default: ComponentStory<typeof Loader> = Template.bind({});

Default.args = {
	size: "big",
	speed: 1
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=812%3A359"
	}
};