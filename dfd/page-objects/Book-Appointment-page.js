import { Selector as selector, t } from 'testcafe';

import { elementWithIdOrClassName, getElementsByPartialId, getElementWithDataTestId } from '../../common/utils';

export default class BookAppointment {
constructor() {
 // book appointment page elements
 this.postalCodeSearchField = selector('input').withAttribute('placeholder', `e.g K0M 1H0`);
 this.postalCodeSearchButton = elementWithIdOrClassName('en_online-appointment-booking_searchButton');
 // this. = elementWithIdOrClassName('en_book-online-appointment-now');
 this.oabLinkoutButton = selector('a').withAttribute('aria-label', `Click to book an appointment`);
}

// Method to perform Book now operation
async performBookNowOperation() {
 await t.click(this.oabLinkoutButton);
}

// Method to perform search operation
async searchWithPostalCode() {
 await t.click(this.postalCodeSearchButton);
}

async enterPostalCode(postalCode) {
 await t.typeText(this.postalCodeSearchField, postalCode);
}
}