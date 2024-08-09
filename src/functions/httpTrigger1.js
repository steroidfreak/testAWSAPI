// import OpenAI from "openai";
// const openai = new OpenAI();
// const { app } = require('@azure/functions');


// app.http('httpTrigger1', {
//     methods: ['GET', 'POST'],
//     authLevel: 'anonymous',
//     handler: async (request, context) => {
//         context.log(`Http function processed request for url "${request.url}"`);

//         const name = request.query.get('name') || await request.text() || 'world';

//         return { body: `Hello Desmond, ${name}!` };
//     }
// });

const OpenAI =require ("openai");
const { app } = require('@azure/functions');  // Replace require with import

const openai = new OpenAI({
    apiKey: "sk-NY_4tc3Nrgwa2-vHk1_JnbfYkDKFOZGBuKKkB2bQSwT3BlbkFJPQ3p1tIFRbsWlydvdGpA1jgQbXNyPqLkPPVKeV7k4A", // Use environment variable for API key
    organization: "org-qNvFDfU1mbWiHMvt9sRmLtxb", // Use environment variable for Organization ID
});

// HTTP Trigger Function
app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // Extracting message from request
        let message;
        if (request.method === 'GET') {
            message = request.query.get('message') || 'Hello';
        } else if (request.method === 'POST') {
            const body = await request.json();
            message = body.message || 'Hello';
        }

        // Calling OpenAI API
        const completion = await openai.chat.completions.create({
            messages: [
                { "role": "system", "content": "你是宝可梦专家，你会介绍宝可梦角色" },
                { "role": "user", "content": message },
                { "role": "assistant", "content": "详细介绍宝可梦" }
            ],
            model: "gpt-4o-mini",
        });

        // Sending back the response
        return {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
            body: {
                completion: completion.choices[0].message.content,
            }
        };
    }
});
