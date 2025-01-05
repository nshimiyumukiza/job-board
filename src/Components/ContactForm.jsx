
import React, { useState } from 'react';
import { Input } from 'antd';
import { Button } from "antd";
const { TextArea } = Input;

 
export function ContactForm () {
  const [value, setValue] = useState('');
  return (
    <div className=' w-[900px]'>
    <div className='grid grid-cols-2 gap-3'>
      <div>
   <TextArea placeholder="First name" autoSize />
      <div
        style={{
          margin: '24px 0',
        }}
      />
      </div>
      <div>
         <TextArea placeholder="Last Name" autoSize />
      <div
        style={{
          margin: '24px 0',
        }}
      />
      </div>
      <div>
         <TextArea placeholder="Email" autoSize />
      <div
        style={{
          margin: '24px 0',
        }}
      />
      </div>
      <div>
         <TextArea placeholder="Phone" autoSize />
      <div
        style={{
          margin: '24px 0',
        }}
      />
      </div>
    </div>
    <TextArea
      showCount
      maxLength={100}
    
      placeholder="Message"
      style={{
        height: 120,
        resize: 'none',
      }}
    />
     <div className='pt-5'>
     <Button type="primary"><i>Send</i></Button>
     </div>
    </div>
  )
}
