import openai from "./chatgpt";


const query = async function (prompt:string,chatId:string,model:string) {
    const res = await openai.createCompletion({
      model,
      prompt,
      max_tokens: 100,
      top_p:1,
      temperature: 0.7,
      frequency_penalty:0,
      presence_penalty:0
    }).then((res)=>res.data.choices[0].text).catch((err)=>`ChatGPT was unable to finde answer for that! (Error ${err.message})`);

    return res;
    
  }
  export default query;