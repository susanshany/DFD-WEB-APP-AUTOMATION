import { Selector as selector, t } from 'testcafe';

import { elementWithIdOrClassName } from '../../common/utils';

export default class NavigationMenu {
constructor() {
 this.navigationMenuCareServices = elementWithIdOrClassName('menuButton-0');
 this.navigationMenuHelpAndResources = elementWithIdOrClassName('menuButton-1');
}

async clickOn(value) {
 await t.click(value);
}

async openCareServicesMenu() {
 await this.clickOn(this.navigationMenuCareServices);
}

async openHelpAndResourcesMenu() {
 await this.clickOn(this.navigationMenuHelpAndResources);
}

async getMenuItem(menu) {
 const menuItem = await selector('a').withAttribute('href', `/static/guest/${menu}/`);
 return menuItem;
}
}
