const landingPage = require("../pages/landingPage");
const loginPage = require("../pages/loginPage");
const data = require("../data/details.json");
const homePage = require("../pages/homePage");
const boardLandingPage = require("../pages/boardLandingPage");

module.exports = {
    //To Click login Button on Landing Page
    clickLoginButton: function (browser) {
        browser
            .maximizeWindow()
            .url('https://trello.com')
            .waitForElementVisible(landingPage.elements.trelloHeading, 10000)
            .waitForElementVisible(landingPage.elements.loginButton, 10000)
            .click(landingPage.elements.loginButton)
            .assert.urlContains("login")
    },
    //Login to Trello with Username and Password
    enterUsernamePassword: function (browser) {
        browser
            .waitForElementVisible(loginPage.elements.loginForm, 10000)
            .waitForElementVisible(loginPage.elements.emailTextbox, 50000)
            .setValue(loginPage.elements.emailTextbox, data.email)
            .waitForElementVisible(loginPage.elements.passwordTextbox, 50000)
            .setValue(loginPage.elements.passwordTextbox, data.password)
            .click(loginPage.elements.loginButton)
            .waitForElementVisible(loginPage.elements.passwordInput, 50000)
            .setValue(loginPage.elements.passwordInput, data.password)
            .click(loginPage.elements.login)
    },
    //Create Board
    createBoard: function (browser) {
        browser
            .waitForElementVisible(homePage.elements.boardsButton, 50000)
            .waitForElementPresent(homePage.elements.boardsButton, 50000)
            .click(homePage.elements.boardsButton)
            .waitForElementVisible(homePage.elements.allBoardsDisplay, 50000)
            .waitForElementPresent(homePage.elements.allBoardsDisplay, 50000)
            .waitForElementVisible(homePage.elements.createBoardTile, 50000)
            .click(homePage.elements.createBoardTile)
            .waitForElementVisible(homePage.elements.addBoardTitle, 50000)
            .setValue(homePage.elements.addBoardTitle, data.BoardTitle)
            .waitForElementVisible(homePage.elements.createBoardbutton, 50000)
            .click(homePage.elements.createBoardbutton)
    },
    //Creates card In forst list
    createCardInFirstList: function (browser) {
        browser
            .waitForElementVisible(boardLandingPage.elements.landingPage, 50000)
            .waitForElementVisible(boardLandingPage.elements.board, 50000)
            .waitForElementVisible(boardLandingPage.elements.board_cardList, 50000)
            .waitForElementVisible(boardLandingPage.elements.cardTextArea, 50000)
            .setValue(boardLandingPage.elements.cardTextArea, data.cardText)
            .waitForElementVisible(boardLandingPage.elements.addCardButton, 50000)
            .click(boardLandingPage.elements.addCardButton)
            .waitForElementVisible(boardLandingPage.elements.cardAdded, 50000)
            .expect.elements(boardLandingPage.elements.cardAdded).count.to.equal(1)
    }

}