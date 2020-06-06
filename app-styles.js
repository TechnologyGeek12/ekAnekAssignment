import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    image: {
        height: 120,
        width: '100%',
    },
    fullImageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '98%',
        resizeMode: 'contain',
    },
    modelStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    closeButtonStyle: {
        width: 25,
        height: 25,
        top: 30,
        right: 9,
        position: 'absolute',
    },
    searchText: {
        marginHorizontal: 7,
        paddingVertical: 7,
        alignItems: 'center',
    },
    searchContainer: {
        borderRadius: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        height: 46,
        margin: 5
    },
    submit: {
        position: 'absolute',
        top: 8,
        right: 14,
        borderRadius: 50,
        padding: 5
    },
    iconStyle: {
        marginTop: 20
    },
    header:{
        padding: 16,
        fontSize: 20,
        color: 'white',
        backgroundColor: '#2196f3'
    }
});

export default styles;