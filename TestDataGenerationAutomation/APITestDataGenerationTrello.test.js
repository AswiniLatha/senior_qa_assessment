const request = require("supertest")("https://api.trello.com/");
const expect = require("chai").expect;
const dataa = require("./data/details.json");
var faker = require('faker');
var boardID, listId, cardId, boardName, count = 3;;
let listNames = [];
var jp = require("jsonpath");

//To generate Random data in before each hook
describe("hooks", function () {
    it("hooks function", function () {
        beforeEach(function () {
            boardName = faker.random.word();
            for (var i = 0; i < count; i++) {
                listNames[i] = faker.random.words();
            }
        });
    })
})

//Create Board
describe("Create /Board", function () {
    it("Creates Board on Trello", async function () {
        const response = await request.post("1/boards/?key=" + dataa.key + "&token=" + dataa.token + "&name=" + boardName + "");
        expect(response.status).to.eql(200);
        boardID = jp.query(response.body, '$.id');
    })
});

//Create Lists
describe("Create /Lists", function () {
    it("Creates Lists on specific Board", async function () {
        for (var j = 0; j < count; j++) {
            await request.post("1/lists?key=" + dataa.key + "&token=" + dataa.token + "&name=" + listNames[j] + "&idBoard=" + boardID + "").then(function(response) {
                expect(response.status).to.eql(200);
            })
        }
    })
})