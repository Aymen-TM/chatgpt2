import type { NextApiRequest,NextApiResponse } from "next";
import query from "../../lib/queryAPI";
import admin from 'firebase-admin'
import { adminDb } from "../../firebaseAdmin";

type Data ={
    answer:string
}

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse<Data>
){
    const {prompt,chatId,model,session} = req.body
    if(!prompt){
        res.status(400).json({answer:"pleas provide a prompt"})
        return;
    }
    if(!chatId){
        res.status(400).json({answer:"pleas provide a chat ID"})
        return;
    }

    // ChatGPT query
    const respons = await query(prompt,chatId,model)

    const message:Message = {
        text:respons || "ChatGPT was unable to finde answer fot that!",
        createdAt:admin.firestore.Timestamp.now(),
        user:{
            _id:"ChatGPT",
            name:'ChatGPT',
            avatar:"https://link.papareact.com/89k"
        }
    }

    await adminDb.collection("users").doc(session?.user?.email!).collection("chats").doc(chatId).collection("messages").add(message)

    res.status(201).json({answer:message.text})
}