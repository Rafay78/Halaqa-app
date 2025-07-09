import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import tw from '../../lib/tailwind'
import { SearchByoptions } from '../../lib/utils'

type ButtonOptionTypes = {
    btnTxt: string,
    handlePress: Function,
    state: boolean
} & TouchableOpacityProps

function OptionButtonSmall({btnTxt , handlePress, style, state,  ...rest}:ButtonOptionTypes) {
  return (
    <TouchableOpacity style={[tw`min-w-18 rounded-full mt-1 py-1 ${state ? 'bg-rose-400': 'bg-[#32CD32]'}`, style]} onPress={() => handlePress()} {...rest}>
    <Text style={tw`text-black font-bold text-center`}>{btnTxt}</Text>
  </TouchableOpacity>  )
}

export default OptionButtonSmall