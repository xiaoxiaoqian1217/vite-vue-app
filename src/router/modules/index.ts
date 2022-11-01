import permissionRoutes from './permission';
import formRoutes from './form';
import singlePageRoutes from './single-page';

const basicRoutes = [...permissionRoutes, ...formRoutes, ...singlePageRoutes];
export default basicRoutes;
