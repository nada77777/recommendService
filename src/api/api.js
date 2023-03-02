
import { Configuration, OpenAIApi } from "openai";



const configuration = new Configuration({
    // organization: "org-fwc2O0nbSNQqlrJCsjkxkzlN",
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: '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',
});


const openai = new OpenAIApi(configuration);

export const test = (item) => {

    const result = openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Please recommend five ${item.country} ${item.genre} ${item.type} title.`,
        temperature: 0,
        max_tokens: 150,
    }).then(result => result.data.choices[0].text);

    return result;
};
