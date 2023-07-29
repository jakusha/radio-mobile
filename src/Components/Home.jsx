import { View, StyleSheet, FlatList, Image } from 'react-native';
import Greetings from './Greetings';
import Nav from './Nav';
import stations from '../../stations';
import CustomText from './CustomText';
import { useState } from 'react';
import SearchModal from './SearchModal';
import CountrySearchModal from './CountrySearchModal';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);
	const [countrymodalVisible, setCountryModalVisible] = useState(false);
	const [search, onChangeSearch] = useState('');

  return (
    <View style={{backgroundColor: '#020202'}}>
			<Nav
				setModalVisible={setModalVisible}
				setCountryModalVisible={setCountryModalVisible}
			/>
			<Greetings />
			<View style={styles.centeredView}>
				<SearchModal
					modalVisible={modalVisible}
					onChangeSearch={onChangeSearch}
					setModalVisible={setModalVisible}
					search={search}
				/>
				<CountrySearchModal
					countrymodalVisible={countrymodalVisible}
					setCountryModalVisible={setCountryModalVisible}
				/>
			</View>

			<View style={styles.radioList}>
				<FlatList
					data={stations}
					renderItem={({ item }) => <Item station={item} navigation={navigation} />}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
  )
}



const Item = ({ navigation, station }) => (
	<View style={styles.radioItem}>
		{station.favicon ? (
			<Image style={styles.radioImg} source={{ uri: station.favicon }} />
		) : (
			<Icon
				name='radio'
				size={50}
				color='#fff'
				style={styles.imageStyle}
			/>
		)}
		<CustomText>{station.name.substring(0,22)}</CustomText>

		<Icon
			name='ellipsis-vertical'
			size={30}
			color='#fff'
			style={{...styles.imageStyle, marginLeft: 'auto'}}
			onPress={()=> navigation.navigate('RadioDetails', {station})}
		/>
	</View>
);

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
	},

	radioItem: {
		display: 'flex',
		flexDirection: 'row',
		gap: 8,
		borderWidth: 0.5,
		paddingTop: 12,
		paddingBottom: 10,
		borderBottomColor: '#fff',
	},

	radioImg: {
		width: 50,
		height: 50,
	},
});

export default Home

