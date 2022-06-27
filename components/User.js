import { Text, View, Image } from "react-native"
import styles from "../styles/User.styles.js"
function User(props) {
    const cdn = "https://cdn.social.danielvaknine.com/images/"
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row"}}>
                <Image style={styles.image} source={{uri: `${cdn}${props.data.image}?size=s`}} />
                <View style={{flexDirection: "column", paddingLeft: 20}}>
                    <Text style={styles.textName}>{props.data.name}</Text>
                    <Text style={styles.text}>{props.data.lastSeen}</Text>
                    <Text style={{...styles.text, ...{color: props.data.lastSeen ? "green" : "red"}}}>Online</Text>
                </View>
            </View>
        </View>
    )
} 

export default User