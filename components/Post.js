
import { Text, View, Image, Dimensions } from "react-native"
import styles from "../styles/Home.styles.js"
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width);
const imageWidth = dimensions.width;

function User(props) {
    const cdn = "https://cdn.social.danielvaknine.com/images/"
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", marginTop: 20}}>
                <Image style={{height: imageHeight,  width: imageWidth }} source={{uri: `${cdn}${props.data.image}?size=m`}} />
                <View style={{flexDirection: "column", paddingLeft: 0}}>
                    {/* <Text style={styles.textName}>{props.data.name}</Text>
                    <Text style={styles.text}>{props.data.lastSeen}</Text> */}
                </View>
            </View>
        </View>
    )
} 

export default User