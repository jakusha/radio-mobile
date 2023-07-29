import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';

const Nav = ({setModalVisible, setCountryModalVisible}) => {
    

	return (
		<View style={styles.nav}>
			<Icon.Button
				name='earth'
				size={30}
				color='#fff'
				style={styles.imageStyle}
				onPress={()=> setCountryModalVisible(true)}
			/>
			<Icon.Button
				name='search'
				size={30}
				color='#fff'
				style={styles.imageStyle}
				onPress={()=> setModalVisible(true)}
			/>
		</View>
	);
};

export default Nav;

const styles = StyleSheet.create({
	nav: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
    imageStyle: {
		backgroundColor: '#020202',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
	},
});
