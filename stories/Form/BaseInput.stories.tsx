import { BaseInput } from "@ui/index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ComponentProps } from "react";

export default {
	title: "Form/Input/BaseInput",
	component: BaseInput
} as ComponentMeta<typeof BaseInput>;

const Template = (args: ComponentProps<typeof BaseInput>) => <BaseInput {...args} />;

export const Default: ComponentStory<typeof BaseInput> = Template.bind({});

Default.args = {
	label: "Label"
};

Default.parameters = {
	design: {
		type: "figma",
		url: "https://www.figma.com/file/axGbEvFwVYwUGTwujK2kKC/Bitcoin-Wallet-UI-Kit-(Community)?node-id=96%3A2409"
	}
};