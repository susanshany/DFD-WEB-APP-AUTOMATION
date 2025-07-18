import { Selector as selector, t } from 'testcafe';

import { elementWithIdOrClassName, getElementsByPartialId, getElementWithDataTestId } from '../../common/utils';

export default class AppointmentBooking {
constructor() {
 // appointment booking page
 this.navigationMenuCareServices = getElementWithDataTestId('button', 'menuButton-0');
 this.headerText = elementWithIdOrClassName('CarouselItem');
 this.bookAnAppointmentButton = selector('a').withAttribute('aria-label', `book-an-appointment`);
}

async ClickBookAnAppointmentButton() {
 await t.click(this.bookAnAppointmentButton);
}
}