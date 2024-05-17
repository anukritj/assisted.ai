import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // Logo
    brandTitle: 'AssistED AI',
    brandUrl: 'https://www.getassisted.io',
    brandTarget: '_blank',
  }),
});
