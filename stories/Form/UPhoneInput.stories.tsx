import { UPhoneInput } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "Form/Input/UPhoneInput",
	component: UPhoneInput
} as ComponentMeta<typeof UPhoneInput>;

const Template = (args: ComponentProps<typeof UPhoneInput>) => <UPhoneInput {...args} />;

export const Default: ComponentStory<typeof UPhoneInput> = Template.bind({});

Default.args = {
	label: "Phone",
	onMutation: (e) => console.log(e)
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=96%3A2409"
	}
};