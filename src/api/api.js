
import { Configuration, OpenAIApi } from "openai";



const configuration = new Configuration({
    organization: "org-fwc2O0nbSNQqlrJCsjkxkzlN",
    apiKey: "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",
});



const openai = new OpenAIApi(configuration);

export const test = (item) => {
    // openai.createCompletion({
    //     model: 'text-davinci-003',
    //     prompt: `recommend me drake's song`,
    //     max_tokens: 150,
    //     temperature: 0,
    // }).then(result => console.log(result));
    const result = openai.createCompletion({
        model: "text-davinci-003",
        // prompt: `Please recommend five ${item.country} ${item.genre} movies.`,
        prompt: `Please recommend five ${item.country} ${item.genre} ${item.type}.`,
        temperature: 0,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then(result => result.data.choices[0].text);

    return result;
};

export const aa = () => {
    // openai.createCompletion({
    //     model: 'text-davinci-003',
    //     prompt: `recommend me drake's song`,
    //     max_tokens: 150,
    //     temperature: 0,
    // }).then(result => console.log(result));
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Please recommend five movies.`,
        temperature: 0,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then(result => console.log(result.data.choices[0].text));

};

export function getItem(item) {
    const { genre, country } = item;
    console.log(genre, country);
};

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ:hi Hi there!",
//   temperature: 0,
//   max_tokens: 100,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
//   stop: ["\n"],
// });














//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
// model: 'text-davinci-003',
// prompt: 'recommend me one female indie song',
// temperature: 0,
// max_tokens: 150,

// openai.Completion.create(
//     model = "text-davinci-003",
//     prompt = "Say this is a test",
//     max_tokens = 7,
//     temperature = 0
// )


// const fetchOpenApi = useCallback(() => {
//     const configuration = new Configuration({
//       apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//     });

//     new OpenAIApi(configuration)
//       .createCompletion({
//         model: 'text-davinci-003',
//         prompt: 'Say this is a test',
//         temperature: 0,
//         max_tokens: 7,
//       })
//       .then((res) => {
//         const { data } = res;

//         console.log(data);
//       });
//   }, []);
