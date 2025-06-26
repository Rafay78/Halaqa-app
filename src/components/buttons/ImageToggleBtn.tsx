import React, { useState } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import tw from '../../lib/tailwind'

function ImageToggleBtn(props:any) {
    const {toggle, handlePress, defImage, onToggleImage} = props
    // const [toggle, setToggle] = useState(false)

  return (
            
    <TouchableOpacity onPress={() => { 
        handlePress()
         }}>
        {toggle == true ? <Image source={onToggleImage} style={tw`h-8 w-8`} /> :
        <Image source={defImage} style={tw`h-8 w-8`} />
        }
    </TouchableOpacity>
  )
}

export default ImageToggleBtn