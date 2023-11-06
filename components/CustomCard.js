import { Text, StyleSheet, View } from "react-native";

export function CustomCard({ title, body }) {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.bodyText}>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 20,
        borderRadius: 10,
        borderColor: "#D3D3D3",
        borderWidth: 3,
        borderStyle: "solid",
        backgroundColor: "white",
        margin: 25,
    },
    titleText: {
        fontSize: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#D3D3D3",
        borderStyle: "dashed",
        letterSpacing: 1,
        textAlign: "center",
        paddingBottom: 10,
        marginBottom: 10,
    },
    bodyText: {
        fontSize: 15,
    },
});