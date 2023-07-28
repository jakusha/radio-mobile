import { View, Modal, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';


const CountrySearchModal = ({countrymodalVisible, setCountryModalVisible}) => {
  return (
    <Modal
    animationType='none'
    transparent={true}
    visible={countrymodalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setCountryModalVisible(!countrymodalVisible);
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalContent}>
        <View style={styles.modalInputCont}>
          <Icon.Button
            name='chevron-back'
            size={40}
            color='#fff'
            style={styles.imageStyle}
            onPress={() => setCountryModalVisible(!countrymodalVisible)}
          />
        </View>
        <View style={styles.modalSearchRes}></View>
      </View>
    </View>
  </Modal>
  )
}

export default CountrySearchModal


const styles = StyleSheet.create({
	imageStyle: {
		backgroundColor: '#020202',
		margin: 0,
		padding: 0,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	centeredView: {
		flex: 1,
	},
	modalContent: {
		margin: 8,
		marginTop: 0,
		borderWidth: 0.5,
		borderColor: '#fff',
		borderRadius: 6,
		overflow: 'hidden',
		backgroundColor: '#020202',
	},
	modalInputCont: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 0.5,
		borderColor: '#fff',
		padding: 8,
		paddingRight: 0,
	},

	modalInput: {
		flex: 1,
		fontSize: 15,
		backgroundColor: '#020202',
		color: '#fff',
	},
	modalSearchRes: {
		padding: 8,
		paddingTop: 10,
		paddingBottom: 10,
	},
});