import { View, Modal, TextInput , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchModal = ({
	modalVisible,
	setModalVisible,
	onChangeSearch,
    search
}) => {
	return (
		<Modal
			animationType='none'
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.');
				setModalVisible(!modalVisible);
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
							onPress={() => setModalVisible(!modalVisible)}
						/>

						<TextInput
							style={styles.modalInput}
							onChangeText={onChangeSearch}
							value={search}
							placeholder='Search radio stations'
							placeholderTextColor='#fff'
							keyboardType='web-search'
						/>

						<Icon.Button
							name='close'
							size={30}
							color='#fff'
							style={styles.imageStyle}
							onPress={() => onChangeSearch('')}
						/>
					</View>
					<View style={styles.modalSearchRes}></View>
				</View>
			</View>
		</Modal>
	);
};

export default SearchModal;

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
