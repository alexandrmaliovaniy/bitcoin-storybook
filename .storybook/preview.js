import {withConsole} from "@storybook/addon-console";
import StyleReset from "@layouts/StyleReset/StyleReset";
import { ThemeProvider } from "@hooks/index";

export const parameters = {
	actions: {argTypesRegex: "^on[A-Z].*"},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
}

export const decorator = [
	(Story) => {
		return withConsole(
			<ThemeProvider>
				<StyleReset>
					{Story}
				</StyleReset>
			</ThemeProvider>
		)
	}
]
