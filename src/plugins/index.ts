import type { App } from 'vue';
import { setUpRouter } from './router';

export async function installPlugin(app: App) {
  setUpRouter(app);
}
