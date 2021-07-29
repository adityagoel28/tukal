import './style/sass/vuesax.scss';
import { App } from '@vue/runtime-core';
import "material-design-icons/iconfont/material-icons.css";
declare const install: (Vue: App, options?: any) => void;
export default install;
export { vsButton, vsButtonGroup } from './components/vsButton';
export { vsSelect, vsSelectOption, vsSelectOptionGroup } from './components/vsSelect';
export { default as vsSwitch } from './components/vsSwitch';
export { default as vsCheckbox } from './components/vsCheckBox';
export { default as vsRadio } from './components/vsRadio';
export { default as vsInput } from './components/vsInput';
export { vsTab, vsTabs } from './components/vsTabs';
export { default as vsAlert } from './components/vsAlert';
export { vsChip, vsChips } from './components/vsChip';
export { vsCard, vsCardGroup } from './components/vsCard';
export { default as vsAvatar } from './components/vsAvatar';
export { default as vsPagination } from './components/vsPagination';
export { default as vsBreadcrumb } from './components/vsBreadcrumb';
export { loading, LoadingAttributes } from './components/vsLoading';
export { default as vsDivider } from './components/vsDivider';
export { default as vsIcon } from './components/vsIcon';
export { vsNavbar, vsNavbarGroup, vsNavbarItem } from './components/vsNavbar';
export { notification, NotificationAttributes } from './components/vsNotifications';
export { vsSidebar, vsSidebarGroup, vsSidebarItem } from './components/vsSideBar';
export { vsPopper, vsPopupMenu, vsPopupItem } from './components/vsPopper';
export { default as vsDialog } from './components/vsDialog';
export { vsCollapse, vsCollapseItem } from './components/vsCollapse';
export { default as vsRow } from './layout/vsRow';
export { default as vsCol } from './layout/vsCol';