// import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux'
// import { View, Text } from 'react-native'
// import Navigator from './src/Navigation/Navigator'

// function App(){
//   return(
//     <View>
//       <Provider store={store}>
//         <Navigator/>
//       </Provider>
//     </View>
//   )
// }

// export default App

import React from 'react';
import Navigator from './src/Navigation/Navigator'

function App(){
  return(
    <View>
      <Navigator/>
    </View>
  )
}

export default App