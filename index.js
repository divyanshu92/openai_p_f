const { Configuration, OpenAIApi } = require("openai");

async function main() {
    try {
        let prompt = 'Say this is a test'

        const configuration = new Configuration({apiKey: ''});
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.6,
          });
          console.log({ result: completion.data.choices[0].text });
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
            error: {
                message: 'An error occurred during your request.',
            }
            });
        }
    }
  }
  main()