import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    textInput: {
        marginHorizontal: 20,
        marginVertical: 12,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: .5
    },
    divider: {
        marginVertical: 12
    },
    text: {
        fontWeight: 700,
        fontSize: 16,
        marginLeft: 16
    },
    container: {
        flexDirection: 'row',
        marginLeft: 40
    },
    chipContainer: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginVertical: 10,
    },
    chip: {
        marginHorizontal: 6,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: .5,
    },
    selectedChip: {
        marginHorizontal: 6,
        backgroundColor: '#EDCACF',
        borderColor: 'transparent',
        borderWidth: .5,
    },
    containerInputs: {
        flexDirection: 'row'
    },
    inputs: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 12,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: .5
    },
    containerButtonPublicar: {
        marginVertical: 12,
        // position: 'absolute'
    },
    buttonPublicar: {
        marginHorizontal: 16,
        backgroundColor: '#4754BA',
    }
})