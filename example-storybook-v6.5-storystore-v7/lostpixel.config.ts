// @ts-nocheck

import { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: './storybook-static',
  },
  generateOnly: true,
  failOnDifference: true,
  beforeScreenshot(page) {
    page.waitForFunction(() => __STORYBOOK_PREVIEW__.currentRender.phase === 'completed')
  },
};
