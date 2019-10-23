import React from 'react';
import Comment from './components/CommentComponets/Comment';
import Create from './components/CommentComponets/commentCreate';
import CardView from './components/CardComponents/CardView';

function App() {
  return (
    <div className="App">
      <CardView type="main-card"/>
      <CardView/>
      <Comment/>
      <Comment type="recomment"/>
      <Create/>
     
    
    </div>
  );
}

export default App;
