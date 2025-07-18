import { Selector as selector, t } from 'testcafe';

import { elementWithIdOrClassName, getElementsByPartialId, getElementWithDataTestId } from '../../common/utils';

export default class FeedbackWidget {
constructor() {
 this.feedbackWidgetId = elementWithIdOrClassName('question-1');
 this.feedbackRatingOne = selector('button').withAttribute('aria-label', `Click button to select 1 out of 5`);
 this.feedbackRatingTwo = selector('button').withAttribute('aria-label', `Click button to select 2 out of 5`);
 this.feedbackRatingThree = selector('button').withAttribute('aria-label', `Click button to select 3 out of 5`);
 this.feedbackRatingFour = selector('button').withAttribute('aria-label', `Click button to select 4 out of 5`);
 this.feedbackratingFive = selector('button').withAttribute('aria-label', `Click button to select 5 out of 5`);
 this.feedBackHardToUnderstand = selector('div').withAttribute('aria-label', `Hard to understand`);
 this.feedbackWidgetSuccessMessage = elementWithIdOrClassName('user-feedback-widget-success-message');
}

async clickOnFeedbackRating(value) {
 // Determine which button to click based on the value
 switch (value) {
 case 1:
 await t.click(this.feedbackRatingOne);
 break;
 case 2:
 await t.click(this.feedbackRatingTwo);
 break;
 case 3:
 await t.click(this.feedbackRatingThree);
 break;
 case 4:
 await t.click(this.feedbackRatingFour);
 break;
 case 5:
 await t.click(this.feedbackRatingFive);
 break;
 default:
 throw new Error(`Invalid feedback value: ${value}. Expected a number between 1 and 5.`);
 }
}

async checkFeedbackSuccessMessage() {
 await t.click(this.feedBackHardToUnderstand);
 // Wait for success message to appear
 await t.expect(this.feedbackWidgetSuccessMessage.exists).ok({ timeout:5000});
}
}
