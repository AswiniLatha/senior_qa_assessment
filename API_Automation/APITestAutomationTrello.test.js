const request = require("supertest")("https://api.trello.com/");
const expect = require("chai").expect;
const dataa = require("./data/details.json");
var jp = require("jsonpath");
var boardID, listId, cardId;

//Get Board ID
describe("GET /BoardId", function () {
  it("returns the board id(s) of the user", async function () {
    await request.get("1/members/" + dataa.username + "/boards?key=" + dataa.key + "&token=" + dataa.token + "")
      .set('Content-type', 'application/json').then(function (response) {
        expect(response.status).to.eql(200);
        var json = JSON.stringify(response.body).substring(1, JSON.stringify(response.body).length - 1);
        boardID = jp.query(JSON.parse(json), '$.id');
      });
  });
});

//Post Card - Get Board Id and Create Card in that Board
describe("POST /Card", function () {
  it("Get First List ID from the specific boardID", async function () {
    const response = await request.get("1/boards/" + boardID + "/lists?key=" + dataa.key + "&token=" + dataa.token + "")
      .set('Content-type', 'application/json');
    expect(response.status).to.eql(200);
    listId = jp.query(response.body[0], '$.id');
  });
  it("Create Card on the first list", async function () {
    const response = await request.post("1/cards?key=" + dataa.key + "&token=" + dataa.token + "&&idList=" + listId + "")
      .send({
        "name": dataa.cardDesc
      });
    expect(response.status).to.eql(200);
    cardId = jp.query(response.body, '$.id');
  })
});
//Verify the card Added Successfully
describe("Verify Card Added", function () {
  it("verify the card added successfully", async function () {
    const response = await request.get("1/cards/" + cardId + "?key=" + dataa.key + "&token=" + dataa.token + "")
      .set('Content-type', 'application/json');
    expect(response.status).to.eql(200);
    var cardName = jp.query(response.body, '$.name');
    expect(cardName).includes(dataa.cardDesc);

  })
})