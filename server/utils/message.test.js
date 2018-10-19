
let {generateMessage,generateLocationMessage} = require('./message');

test('it should generate correct message object',() =>{
    let from = 'mike';
    let text = 'some message';
    let message = generateMessage(from,text);
    expect(message.createdAt).not.toBeNaN();
    expect(message).toMatchObject({from,text});
});


test('it should generate correct location object',()=>{
    let from = "Mike";
    let latitude = 12 ; 
    let longitude = 16;

    let url = "https://www.google.com/maps?q=12,16";
    let message = generateLocationMessage(from,latitude,longitude);
    
    expect(message.createdAt).not.toBeNaN();
    expect(message).toMatchObject({from,url});
});