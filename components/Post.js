
import { Text, View, Image, Dimensions } from "react-native"
import { useState } from "react"
import styles from "../styles/Home.styles.js"
import card from "../styles/Card.styles.js"

const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

function User(props) {
    const [height, setHeight] = useState(dimensions.width)
    const cdn = "https://cdn.social.danielvaknine.com/images/"
    return (
        <View style={{...card.card, marginBottom: 20}}>
            <View style={{...card.cardHeader, flexDirection: "row"}}>
                <Image style={styles.image} source={{uri: `${cdn}${props.data.userImage}?size=s`}} />
                <View style={{flexDirection: "column", paddingLeft: 20, marginTop: 10}}>
                    <Text style={styles.textName}>{props.data.name}</Text>
                </View>
            </View>
            <View style={card.cardBody}>
                <Image onLoad={({nativeEvent: {source: {width, height}}}) => {
                    setHeight(height - (width-imageWidth))
                }}
                 style={{height: height,  width: imageWidth }} source={{uri: `${cdn}${props.data.image}?size=m`}} />
            </View>
            <View style={card.cardFooter}>
                { props.data.title ? <Text style={{...styles.textName, textAlign: 'center'}}>{props.data.title}</Text> : null }
                { props.data.text ? <Text style={styles.textName}>{props.data.text}</Text> : null } 
                <Text style={{...styles.textName, textAlign: 'right'}}>{props.data.date}</Text> 
            </View>
        </View>
    )
} 

export default User