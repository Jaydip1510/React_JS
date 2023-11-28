import React from 'react'

const Hocomponent = (Originalcomponent) => {
   class Newcomponent extends React.Component {
      render(){
          return <Originalcomponent name="jaydip makwana" />    
      }
   }
  return Newcomponent
    
}
export default Hocomponent
