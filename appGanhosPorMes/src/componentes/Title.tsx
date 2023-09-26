import React, {ReactNode} from "react"
import { ITextProps, Text } from "native-base"


interface PropsTitle extends ITextProps {
    children: ReactNode
    color?: string 
    position?: string
}

export const Title:React.FC<PropsTitle> = ({children, color, position, ...rest}) => {

    return (
      <Text
        fontWeight={"bold"}
        fontSize={"xl"}
        color={color}
        textAlign={position}
        {...rest}
      >
        {children}
      </Text>
    );
}