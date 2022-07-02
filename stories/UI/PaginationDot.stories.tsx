import { PaginationDot } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "UI/Pagination/Dot",
	component: PaginationDot
} as ComponentMeta<typeof PaginationDot>;

const Template = (args: ComponentProps<typeof PaginationDot>) => <PaginationDot {...args} />;

export const Default: ComponentStory<typeof PaginationDot> = Template.bind({});

Default.args = {
	value: false
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=3253%3A83969"
	}
};