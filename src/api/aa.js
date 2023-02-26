const OpenAI = require('openai')
const { Configuration, OpenAIApi } = OpenAI

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-61MEulc6s1BeLM2RoTdq7Wyg",
    apiKey: '[API-KEY]',
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const { message } = req.body
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 4000,
        temperature: 0,
    });
    console.log(response.data)
    if (response.data) {
        if (response.data.choices) {
            res.json({
                message: response.data.choices[0].text
            })
        }
    }
})

app.listen(port, () => {
    console.log('Example app port: ' + port);
})




const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ:hi Hi there!",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["\n"],
});