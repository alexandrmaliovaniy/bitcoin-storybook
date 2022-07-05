import { NumberInput } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps, useEffect, useState } from "react";

export default {
	title: "Form/Input/NumberInput",
	component: NumberInput
} as ComponentMeta<typeof NumberInput>;

const Template = (args: ComponentProps<typeof NumberInput>) => {
	const [value, setValue] = useState<string | null>(null);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		if (value && Number(value) > 1000) {
			return setError("Value must be less than 1000");
		}
		setError("");
	}, [value]);


	return (
		<NumberInput {...args} value={value} onMutation={setValue} error={error}/>
	);
};

export const Default: ComponentStory<typeof NumberInput> = Template.bind({});

Default.args = {
	label: "Label",
	placeholder: "Placeholder"
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=96%3A2409"
	}
};