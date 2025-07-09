import React, { useState } from 'react';
import tw from 'twrnc';
import { View } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';


type DropDownTypes = {
  value: string,
  setValue: Function,
  data: any[]
}

const DropDown = ({value, setValue, data}:DropDownTypes) => {
  

  return (
      <SelectCountry
        style={tw`h-12 w-38 bg-[#EEEEEE] rounded-full px-2 border`}
        selectedTextStyle={tw`text-base ml-2`}
        placeholderStyle={tw`text-base`}
        imageStyle={tw`w-6 h-6 rounded-full`}
        iconStyle={tw`w-5 h-5`}
        maxHeight={200}
        value={value}
        data={data}
        valueField="value"
        labelField="lable"
        imageField="image"
        placeholder="Select Book"
        searchPlaceholder="Search..."
        onChange={e => setValue(e)}
      />
  );
};



export default DropDown