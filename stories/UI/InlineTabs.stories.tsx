import { InlineTabs } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps, useState } from "react";

export default {
	title: "UI/InlineTabs",
	component: InlineTabs
} as ComponentMeta<typeof InlineTabs>;

const Template = (args: ComponentProps<typeof InlineTabs>) => {
	const [value, setValue] = useState<number | null>(0);
	const [disabled, setDisabled] = useState<boolean>(false);

	const OnMutation = (v: number | null) => {
		setValue(v);
		setDisabled(true);
		setTimeout(() => {
			setDisabled(false);
		}, 1000);
	};

	return (
		<InlineTabs {...args} value={value} disabled={disabled} onMutation={OnMutation}/>
	);
};

export const Default: ComponentStory<typeof InlineTabs> = Template.bind({});

Default.args = {
	tabs: ["Label", "Label", "Label"]
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=137%3A2539"
	}
};