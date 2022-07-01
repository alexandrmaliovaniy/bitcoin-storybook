import React from "react";
import {withConsole} from "@storybook/addon-console";
import StyleReset from "@layouts/StyleReset/StyleReset";
import {ThemeProvider} from "@hooks/index";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    (Story) => {
        return (
            <ThemeProvider>
                <StyleReset>
                    <Story/>
                </StyleReset>
            </ThemeProvider>
        )
    }
]
