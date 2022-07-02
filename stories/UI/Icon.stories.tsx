import { Icon } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "UI/Icon",
	component: Icon
} as ComponentMeta<typeof Icon>;

const Template = (args: ComponentProps<typeof Icon>) => <Icon {...args} />;

export const Default: ComponentStory<typeof Icon> = Template.bind({});

Default.args = {
	name: "ArrowDown",
	bold: false,
	size: "medium"
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=1%3A2"
	}
};