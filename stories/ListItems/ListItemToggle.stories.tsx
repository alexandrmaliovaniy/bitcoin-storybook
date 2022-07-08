import { ListItemToggle } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "ListItems/Toggle",
	component: ListItemToggle
} as ComponentMeta<typeof ListItemToggle>;

const Template = (args: ComponentProps<typeof ListItemToggle>) => {
	return (
		<ListItemToggle {...args} />
	);
};

export const Default: ComponentStory<typeof ListItemToggle> = Template.bind({});

Default.args = {
	value: false,
	caption: {
		title: "Label",
		subTitle: "Description"
	},
	arrow: false
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=812%3A359"
	}
};