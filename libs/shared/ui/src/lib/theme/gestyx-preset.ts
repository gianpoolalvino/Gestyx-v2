import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';


export const GestyxPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{red.50}',
      100: '{red.100}',
      200: '{red.200}',
      300: '{red.300}',
      400: '{red.400}',
      500: '{red.500}',
      600: '{red.600}',
      700: '{red.700}',
      800: '{red.800}',
      900: '{red.900}',
      950: '{red.950}',
    },
    colorScheme: {
      light: { text: { color: '{slate.900}', mutedColor: '{slate.500}' } },
      dark:  { text: { color: '{slate.50}',  mutedColor: '{slate.400}' } },
    },
  },
});
