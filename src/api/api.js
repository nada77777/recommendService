import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export const searchObject = (item) => {

    const result = openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Please recommend five ${item.country} ${item.genre} ${item.type} title.`, //입력받는 인자에 따라 검색어 설정
        temperature: 0,
        max_tokens: 150,
    }).then(result => result.data.choices[0].text);

    return result;
};

