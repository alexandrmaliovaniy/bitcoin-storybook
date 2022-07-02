import { Tag } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "UI/Tag",
	component: Tag
} as ComponentMeta<typeof Tag>;

const Template = (args: ComponentProps<typeof Tag>) => <Tag {...args} />;

export const Default: ComponentStory<typeof Tag> = Template.bind({});

Default.args = {
	children: "Label",
	outlined: false,
	size: "medium"
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=133%3A352"
	}
};