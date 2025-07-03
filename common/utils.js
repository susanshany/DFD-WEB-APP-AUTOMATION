/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/no-extraneous-dependencies
import { ClientFunction, Selector as selector } from 'testcafe';

class ViewPort {
 async large(test) {
 await test.maximizeWindow();
 }

 /**
   * Because TestCafe will sometimes fail to resize window
   * @param {number} width width of window (px)
   * @param {number} height width of window (px)
   * @param {TestController} test Testcafe Test controller
   */

 async resizeScreen(width, height, test) {
 let tries = 10;
 let rect = { width: 0, height: 0 };
 while (tries !== 0 && (rect.width !== width || rect.height !== height)) {
 // eslint-disable-next-line no-await-in-loop
 await test.resizeWindow(width, height);
 rect = await test.eval(() => ({
 width: window.innerWidth,
 height: window.innerHeight,
 }));
 tries--;
 }
 }

 async medium(test) {
 await this.resizeScreen(768, 1024, test);
 }

 async small(test) {
 await this.resizeScreen(414, 896, test);
 }
}
const getElementWithDataTestId = (htmlElement, dataTestId) => selector(htmlElement).withAttribute('data-testid', dataTestId);

const getElementsByPartialId = idSubstring => selector('id').withText(idSubstring);
/**
* Iterate over a selector that selects > 1 number of nodes in the DOM
* @param {Selector} nodes a selector
* @param {async (node: Selector) => void} job the action you'd like to execute on each node in the selector
*/
const iterateOverSelector = async (nodes, job) => {
 const nodeCount = await nodes.count;
 for (let i = 0; i < nodeCount; i += 1) {
 // ignore eslint as await is unavoidable for testcafe
 // eslint-disable-next-line no-await-in-loop
 await job(nodes.nth(i));
 }
};
/**
* Given a parent selector and a child selector, finds a child element that is a descendent of the parent element. Uses the child element's testid
* @param {Selector} parent element to find descendents
* @param {Selector} child the selector for the desired child element
* @returns {Promise<Selector>} a selector for an element that matches the child selector that is a descendent of the parent element
*/
const findChild = async (parent, child) => {
 const childElem = child.nth(0);
 const childTestId = `[data-testid='${await childElem.getAttribute('data-testid')}'],[data-test-id='${await childElem.getAttribute(
 'data-test-id'
 )}']`;
 return parent.find(childTestId);
};
/**
* Select element based on attribute testid (deprecated)
* @deprecated use elementsWithDataTestID
* @param {String} testId
* @returns {Selector}
*/
const elementsWithTestID = testId => selector([testid="${testId}"]);
/**
* Select element based on attribute data-testid
* @param {String} testId
* @returns {Selector}
*/
const elementsWithDataTestID = testId => selector(`[data-testid="${testId}"],[data-test-id="${testId}"]`);
/**
* Select element based on their id or classname (will return a Selector array that matches either)
* @param {String} value
* @returns {Selector}
*/
const elementWithIdOrClassName = selector(value => document.getElementById(value) || document.getElementsByClassName(value));
/**
* Select element using a css selector
* @param {String} value
* @returns {Selector}
*/
const queryElement = selector(value => document.querySelectorAll(value));
/**
* Select element based on their name
* @param {String} value
* @returns {Selector}
*/
const elementWithName = selector(value => document.getElementsByName(value));
const reloadPage = async test => test.eval(() => window.location.reload());
const visibleElement = cssSelector => selector(cssSelector).with({ visibilityCheck: true });

const notVisibleElement = cssSelector => selector(cssSelector).with({ visibilityCheck: false });

const elementExist = element => element.exists.then(elementExists => elementExists);
const oneOrMoreElementsExist = async elements =>
 Promise.all(elements.map(element => elementExist(element))).then(result => result.includes(true));
const getCurrentLocationData = ClientFunction(() => window.location);
const isKeycloak = ClientFunction(() => window.location.pathname.includes('/auth/realms'));
export {
 elementsWithTestID,
 elementsWithDataTestID,
 elementWithIdOrClassName,
 visibleElement,
 notVisibleElement,
 ViewPort,
 reloadPage,
 elementExist,
 oneOrMoreElementsExist,
 elementWithName,
 getCurrentLocationData,
 isKeycloak,
 queryElement,
 findChild,
 iterateOverSelector,
 getElementWithDataTestId,
 getElementsByPartialId,
};
