import React, { useEffect, useRef, useState, useCallback } from "react";
import { Container, TextInput, Icon } from "./styles";
import { TextInputProps } from "react-native";
import { useField } from "@unform/core";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}
interface InputRef {
  focus(): void
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = "", fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false)
  const [isField, setIsField] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    if(inputValueRef.current.value){
      setIsField(true)
    } else{
      setIsField(false)
    }
  }, [])


  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue(){
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      },
    })
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused}>
      <Icon name={icon} size={20} color={isFocused || isField ? '#ff9000' : '#666360'} />
      <TextInput
        ref={inputElementRef}
        onFocus={handleInputFocus}
        defaultValue={defaultValue}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
  
        }}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        {...rest}
      ></TextInput>
    </Container>
  );
};

export default Input;
