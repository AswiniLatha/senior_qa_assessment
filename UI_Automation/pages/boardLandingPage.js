module.exports = {
    elements : {
        landingPage: "main#popover-boundary",
        board: "div#board",
        board_cardList : "div#board>div",
        toDoListHeader: "div#board>div:nth-of-type(1)>div>div>textarea",
        addCardUnderToDoList: "div#board>div:nth-of-type(1)>div>div:nth-of-type(3)>a",
        cardTextArea: "textarea[class='list-card-composer-textarea js-card-title']",
        addCardButton: "input[value='Add card']",
        cardAdded: "div#board>div:nth-of-type(1)>div>div[class^='list-cards u-fancy-scrollbar']>a",
        lists: "div.js-list.list-wrapper",
        addList: "a.open-add-list.js-open-add-list>span",
        listTitle: "input.list-name-input",
        addListButton: "div.list-add-controls.u-clearfix>input",
    }
}