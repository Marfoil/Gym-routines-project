import { addDecorator } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../coverage/jest-test-results.json';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: false },
};

addDecorator(
    withTests({
        results,
    }),
);
