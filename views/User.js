import { Text, View, Image } from "react-native";
import styles from "../styles/User.styles.js"

function User (props) {
    const cdn = "https://cdn.social.danielvaknine.com/images/"
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row"}}>
                <Image style={styles.image} source={{uri: `${cdn}${props.route.params.image}?size=s`}} />
                <View style={{flexDirection: "column", paddingLeft: 20}}>
                    <Text style={styles.text}>{props.route.params.name}</Text>
                    <Text style={styles.text}>{props.route.params.lastSeen}</Text>
                    <Text style={{...styles.text, ...{color: props.route.params.lastSeen ? "green" : "red"}}}>Online</Text>
                </View>
            </View>
        </View>
    )
}

export default User