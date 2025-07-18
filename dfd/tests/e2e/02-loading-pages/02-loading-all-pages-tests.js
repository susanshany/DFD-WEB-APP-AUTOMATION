import config from '../../../support/config.json';
import LandingPage from '../../../page-objects/landing-page-objects';
import NavigationMenu from '../../../page-objects/navigation-menu';
import AppointmentBooking from '../../../page-objects/Appointment-booking-page';
import BookAppointment from '../../../page-objects/Book-Appointment-page';
import FeedbackWidget from '../../../page-objects/FeedbackWidget-page';

const landingPage = new LandingPage();
const navigationMenu = new NavigationMenu();
const appointmentBookingPage = new AppointmentBooking();
const bookAppointmentPage = new BookAppointment();
const feedbackWidget = new FeedbackWidget();

fixture('Landing Page From Menu')
.meta({ functionality: 'loading-pages', testable: 'true' })
// Given I am in the landing page
.page(config.baseUrl);

const repeatCount = 200;

for (let i = 0; i < repeatCount; i++) {
test.meta({ sanity: 'true', regression: 'true' })('Load Menu Items', async test => {
 await test.wait(1000).expect(landingPage.homePageBanner.exists).ok();
 // Go through Care Services menu
 await navigationMenu.openCareServicesMenu();
 const symptomAssessment = await navigationMenu.getMenuItem('symptom-assessment');
 await test.wait(1000).click(symptomAssessment)
 await test.wait(1000).expect(landingPage.homePageBanner.exists).ok();

 // Go through Help and Resources menu
 await navigationMenu.openHelpAndResourcesMenu();
 const medicalLibrary = await navigationMenu.getMenuItem('medical-library');
 await test.wait(100).click(medicalLibrary);
 await test.wait(1000).expect(landingPage.homePageBanner.exists).ok();

 await navigationMenu.openHelpAndResourcesMenu();
 const relatedArticles = await navigationMenu.getMenuItem('related-articles');
 await test.wait(100).click(relatedArticles);
 await test.wait(1000).expect(landingPage.homePageBanner.exists).ok();

 await navigationMenu.openHelpAndResourcesMenu();
 const knowledgeHub = await navigationMenu.getMenuItem('knowledge-hub');
 await test.wait(100).click(knowledgeHub);
 await test.wait(1000).expect(landingPage.homePageBanner.exists).ok();
 await test.wait(2000);
});
}
for (let i = 0; i < repeatCount; i++) {
test.skip.meta({ sanity: 'true', regression: 'true' })('Access Buttons on trigger keyword card', async test => {
 await test.wait(1000).expect(landingPage.homePageBanner.exists).ok();
 await landingPage.openSearchDrawerButton();
 await landingPage.searchFor('kill');
 await landingPage.triggereWordCardCall();
});
}
for (let i = 0; i < repeatCount; i++) {
test.skip.meta({ sanity: 'true', regression: 'true' })('Access rating and feedback options on Feedback widget', async test => {
 await test.wait(1000).expect(landingPage.homePageBanner.exists).ok();
 // Go through Care Services menu
 await navigationMenu.openCareServicesMenu();
 const symptomAssessment = await navigationMenu.getMenuItem('symptom-assessment');
 await test.wait(1000).click(symptomAssessment).expect(landingPage.homePageBanner.exists).ok();

 await feedbackWidget.clickOnFeedbackRating(1);
 await feedbackWidget.checkFeedbackSuccessMessage();
});
}
for (let i = 0; i < repeatCount; i++) {
test.skip.meta({ sanity: 'true', regression: 'true' })('Access search and book now buttons on book appointment page', async test => {
 // Go through Care Services menu
 await navigationMenu.openCareServicesMenu();
 const appointmentBooking = await navigationMenu.getMenuItem('virtual-urgent-care');
 await test.wait(1000).click(appointmentBooking).expect(landingPage.homePageBanner.exists).ok();
 await appointmentBookingPage.ClickBookAnAppointmentButton();
 await bookAppointmentPage.enterPostalCode('K0A6t6');
 await bookAppointmentPage.searchWithPostalCode();
});
}
