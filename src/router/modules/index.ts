import permissionRoutes from './permission';
import formRoutes from './form';
import singlePageRoutes from './single-page';
import { tabsPage } from './tabs-page';

const basicRoutes = [...permissionRoutes, ...formRoutes, ...singlePageRoutes, ...tabsPage];
export default basicRoutes;
