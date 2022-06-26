import { ComponentMeta, ComponentStory } from "@storybook/react";
import { S3 } from "@ui/index";
import { ComponentProps } from "react";

export default {
	title: "Typography/Subtitle/S3",
	component: S3
} as ComponentMeta<typeof S3>;

const Template = (args: ComponentProps<typeof S3>) => <S3 {...args} />;

export const Default: ComponentStory<typeof S3> = Template.bind({});

Default.args = {
	children: "Subtitle S3"
};
