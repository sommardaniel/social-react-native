
import { Text, View, Image } from "react-native"
import styles from "../styles/Home.styles.js"
import card from "../styles/Card.styles.js"

function Message(props) {
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
            </View>
            <View style={card.cardFooter}>
                { props.data.title ? <Text style={{...styles.textName, textAlign: 'center'}}>{props.data.title}</Text> : null }
                { props.data.text ? <Text style={styles.textName}>{props.data.text}</Text> : null } 
                <Text style={{...styles.textName, textAlign: 'right'}}>{props.data.date}</Text> 
            </View>
        </View>
    )
} 

export default Message