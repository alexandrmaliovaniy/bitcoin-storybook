import { ListItem } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";
import { useTheme } from "@hooks/Theme/ThemeHook";

export default {
	title: "ListItems/Item",
	component: ListItem
} as ComponentMeta<typeof ListItem>;

const Template = (args: ComponentProps<typeof ListItem>) => {
	const { color } = useTheme();
	return (
		<ListItem {...args} caption={{ ...args.caption, color: color("orange") }}/>
	);
};

export const Default: ComponentStory<typeof ListItem> = Template.bind({});

Default.args = {
	imageName: "OrangeBottle",
	caption: {
		title: "Title",
		subTitle: "Description",
		amount: "Amount"
	},
	subCaption: {
		title: "Title",
		subTitle: "Description"
	},
	arrow: false
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=738%3A444"
	}
};