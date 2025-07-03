import { t } from 'testcafe';

import { elementWithIdOrClassName, getElementsByPartialId, getElementWithDataTestId } from '../../common/utils';

export default class LandingPage {
constructor() {
 // landing page
 this.navigationMenuCareServices = getElementWithDataTestId('button', 'menuButton-0');
 this.navigationMenuHelpAndResources = getElementWithDataTestId('button', 'menuButton-1');
 this.homePageBanner = getElementWithDataTestId('div', 'base-banner-container');
 this.headerText = elementWithIdOrClassName('CarouselItem');
 this.searchDrawerButton = elementWithIdOrClassName('open-search-drawer-button');
 this.searchField = elementWithIdOrClassName('input-field-for-search');
 this.triggerWordCardCallButton = elementWithIdOrClassName('en_globalSearch_triggerKeywordCard_Help is available_Call 988');
}

async clickOn(value) {
 await t.click(value);
}

openCareServicesMenu() {
 this.clickOn(this.navigationMenuCareServices);
}

openHelpAndResourcesMenu() {
 this.clickOn(this.navigationMenuHelpAndResources);
}

openSearchDrawerButton() {
 this.clickOn(this.searchDrawerButton);
}

async searchFor(searchkeyword) {
 this.clickOn(this.searchField);
 await t.typeText(this.searchField, searchkeyword).pressKey('enter');
 await t.expect(this.triggerWordCardCallButton.exists).ok();
}

triggereWordCardCall() {
 this.clickOn(this.triggerWordCardCallButton);
}
}
