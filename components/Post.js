
import { Text, View, Image, Dimensions } from "react-native"
import { useState } from "react"
import styles from "../styles/Home.styles.js"
const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width);
const imageWidth = dimensions.width;

function User(props) {
    const [height, setHeight] = useState(imageHeight)
    const cdn = "https://cdn.social.danielvaknine.com/images/"
    return (
        <View >
            <View style={{...styles.cardHeader, flexDirection: "row"}}>
                <Image style={styles.image} source={{uri: `${cdn}${props.data.userImage}?size=s`}} />
                <View style={{flexDirection: "column", paddingLeft: 20}}>
                    <Text style={styles.textName}>{props.data.name}</Text>
                </View>
            </View>
            <View style={styles.cardBody}>
                <Image onLoad={({nativeEvent: {source: {width, height}}}) => setHeight(height)}
                 style={{height: height,  width: imageWidth }} source={{uri: `${cdn}${props.data.image}?size=m`}} />
            </View>
            <View style={styles.cardFooter}>
                { props.data.title ? <Text style={styles.textName}>{props.data.title}</Text> : null }
                { props.data.text ? <Text style={styles.textName}>{props.data.text}</Text> : null } 
                <Text style={styles.textName}>{props.data.date}</Text> 
            </View>
        </View>
    )
} 

export default User