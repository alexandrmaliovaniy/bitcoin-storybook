import { TextInput } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps, useEffect, useState } from "react";

export default {
	title: "Form/Input/TextInput",
	component: TextInput
} as ComponentMeta<typeof TextInput>;

const Template = (args: ComponentProps<typeof TextInput>) => {
	const [value, setValue] = useState<string | null>("");
	const [error, setError] = useState<string>("");

	useEffect(() => {
		if (value && value?.length > 20) {
			return setError("String must be less than 20 characters");
		}
		setError("");
	}, [value]);


	return (
		<TextInput {...args} value={value} onMutation={setValue} error={error}/>
	);
};

export const Default: ComponentStory<typeof TextInput> = Template.bind({});

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