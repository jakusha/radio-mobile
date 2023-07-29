import { Text , StyleSheet} from "react-native"

const CustomText = ({styles, ...props})=> {
    const userStyle = [defaultStyle, styles]
    return <Text style={userStyle} {...props} />
}

const defaultStyle = StyleSheet.create({
    color: '#fff',
    fontSize: 20,
    
})

export default CustomText


