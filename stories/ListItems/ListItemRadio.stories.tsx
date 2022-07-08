import { ListItemRadio } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "ListItems/Radio",
	component: ListItemRadio
} as ComponentMeta<typeof ListItemRadio>;

const Template = (args: ComponentProps<typeof ListItemRadio>) => {
	return (
		<ListItemRadio {...args} />
	);
};

export const Default: ComponentStory<typeof ListItemRadio> = Template.bind({});

Default.args = {
	value: false,
	caption: {
		title: "Label",
		subTitle: "Description"
	},
	subCaption: {
		title: "Secondary",
		subTitle: "Secondary description"
	},
	arrow: false
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=812%3A359"
	}
};