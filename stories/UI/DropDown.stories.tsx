import { DropDown } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps, useState } from "react";
import { IUI } from "@ui/Interface";

export default {
	title: "UI/DropDown/CDropDown",
	component: DropDown
} as ComponentMeta<typeof DropDown>;

const Template = (args: ComponentProps<typeof DropDown>) => {
	const [value, setValue] = useState<IUI.DropDownItem<any> | null>(args.list[0]);
	return (
		<DropDown {...args} value={value} onMutation={(e) => setValue(e)}/>
	);
};

export const Default: ComponentStory<typeof DropDown> = Template.bind({});

Default.args = {
	small: false,
	list: [
		{
			label: "Ukraine",
			value: "+380"
		},
		{
			label: "Russia",
			value: "+7"
		},
		{
			label: "USA",
			value: "+1"
		},
		{
			label: "Ukraine",
			value: "+380"
		},
		{
			label: "Russia",
			value: "+7"
		},
		{
			label: "USA",
			value: "+1"
		}
	]
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=1%3A2"
	}
};