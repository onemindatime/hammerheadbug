import { Selector } from 'testcafe';

fixture `Demo`.page(`http://localhost:8080`);

test('Test 1', async (t) => {
    await t.expect(Selector('hello-world').innerText).eql('Hello');
});

test('Test 2', async (t) => {
    await t.expect(Selector('hello-world').innerText).eql('Hello');
});