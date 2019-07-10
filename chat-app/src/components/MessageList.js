import React from 'react';

class MessageList extends React.Component {
  render(){
    const dummyData = [
      { senderID:'John',text:'Hi! How are you doing?'},
      { senderID:'Robert',text:'Great! how about you?'},
      { senderID:'Ram',text:'Good to hear, I am great as well.'},
      { senderID:'Sheena',text:'Yahoooo!'}
    ];
    return(
      <div>
        {dummyData.map((message,index)=>{
          return (
            <div key={index} className='message'>
              <div className='message-username'>{ message.senderID }</div>
              <div className='message-text'>{ message.text }</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
