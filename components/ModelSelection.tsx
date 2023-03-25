"use client"
import React from 'react'
import useSWR from "swr"
import Select from 'react-select'


type Props = {}

const fetchModels =()=> fetch("/api/getEngines").then((res)=>res.json());

const ModelSelection = (props: Props) => {
    const {data:models, isLoading} = useSWR("models",fetchModels)
    const {data:model,mutate:setModel} = useSWR("model",{
        fallbackData:"text-davinci-003"
    })


    
  return (
    <div>
        <Select className='mt-2' classNames={{control:(state)=>"bg border-[#434654]"}}
            defaultValue={model}
            placeholder={model}
            options={models?.modelOptions} isSearchable isLoading={isLoading} menuPosition='fixed'
            onChange={(e)=>setModel(e.value)}
         />
    </div>
  )
}

export default ModelSelection