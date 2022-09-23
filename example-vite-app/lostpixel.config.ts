// @ts-nocheck

import { CustomProjectConfig } from 'lost-pixel';

export const config: CustomProjectConfig = {
  pageShots: {
    pages: [
      { path: '/', name: 'app' },
    ],
    baseUrl: 'http://localhost:5173',
  },
  generateOnly: true,
  failOnDifference: true,
};
