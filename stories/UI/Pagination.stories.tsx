import { Pagination } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps, useState } from "react";

export default {
	title: "UI/Pagination/List",
	component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template = (args: ComponentProps<typeof Pagination>) => {
	const [value, setValue] = useState<number | null>(0);
	return (
		<Pagination {...args} value={value} onMutation={setValue}/>
	);
};

export const Default: ComponentStory<typeof Pagination> = Template.bind({});

Default.args = {
	count: 10
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=3253%3A83969"
	}
};