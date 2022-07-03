import { Toggle } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps, useState } from "react";

export default {
	title: "Form/Toggle/CToggle",
	component: Toggle
} as ComponentMeta<typeof Toggle>;

const Template = (args: ComponentProps<typeof Toggle>) => {
	const [value, setValue] = useState<boolean>(false);
	const [disabled, setDisabled] = useState<boolean>(false);

	const OnMutation = () => {
		setValue(!value);
		setDisabled(true);
		setTimeout(() => {
			setDisabled(false);
		}, 1000);
	};

	return (
		<Toggle {...args} value={value} disabled={disabled} onMutation={OnMutation}/>
	);
};

export const Default: ComponentStory<typeof Toggle> = Template.bind({});

Default.args = {
	small: false
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=96%3A2515"
	}
};