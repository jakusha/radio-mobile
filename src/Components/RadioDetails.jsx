import { View, StyleSheet, Image, FlatList, Pressable, Linking} from 'react-native';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/Ionicons';

const RadioDetails = ({ route, navigation }) => {
	const { station } = route.params;
	return (
		<View>
			<View style={{ width: 50, overflow: 'hidden' }}>
				<Icon.Button
					name='chevron-back'
					size={50}
					color='#fff'
					style={styles.imageStyle}
					onPress={() => navigation.navigate('Home')}
				/>
			</View>
			{station.favicon ? (
				<Image
					style={styles.radioImg}
					source={{ uri: station.favicon }}
				/>
			) : (
				<Icon
					name='radio'
					size={300}
					color='#fff'
					style={styles.imageStyle}
				/>
			)}
			<CustomText
				styles={{
					fontSize: 30,
					alignSelf: 'center',
					marginTop: 16,
					marginBottom: 16,
				}}
			>
				{station.name}
			</CustomText>

			<View style={{ gap: 10 }}>
				<View style={styles.radioInfo}>
					<CustomText styles={{ fontSize: 25, fontWeight: 700 }}>
						Votes:
					</CustomText>
					<CustomText styles={{ fontSize: 20, opacity: 0.8 }}>
						{station.votes}
					</CustomText>
				</View>

				<View style={styles.radioInfo}>
					<CustomText styles={{ fontSize: 25, fontWeight: 700 }}>
						State:
					</CustomText>
					<CustomText styles={{ fontSize: 20, opacity: 0.8 }}>
						{station.state}
					</CustomText>
				</View>

				<View style={styles.radioInfo}>
					<CustomText styles={{ fontSize: 25, fontWeight: 700 }}>
						Country:
					</CustomText>
					<CustomText styles={{ fontSize: 20, opacity: 0.8 }}>
						{station.country}
					</CustomText>
				</View>

				<View
					style={[
						styles.radioInfo,
						{ flexDirection: 'column', gap: 4 },
					]}
				>
					<CustomText
						styles={{
							fontSize: 25,
							fontWeight: 700,
							alignSelf: 'flex-start',
						}}
					>
						Tags:
					</CustomText>

					<FlatList
						data={station.tags}
						renderItem={({ item }) => <TagItem title={item} />}
						keyExtractor={(item) => item}
						style={{
							borderWidth: 1,
							alignSelf: 'stretch',
						}}
						horizontal
					/>
				</View>

				<View style={[styles.radioInfo, { gap: 10, marginTop: 40 }]}>
					<Icon
						name='earth'
						size={30}
						color='#fff'
						style={styles.imageStyle}
					/>
					<Pressable onPress={async ()=> {
                        await Linking.openURL(station.homepage);
                    }}>
						<CustomText styles={{ fontSize: 25, fontWeight: 700 }}>
							Website
						</CustomText>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default RadioDetails;

const styles = StyleSheet.create({
	imageStyle: {
		backgroundColor: '#020202',
		margin: 0,
		padding: 0,
		alignSelf: 'flex-start',
	},
	radioImg: {
		width: 300,
		height: 300,
		alignSelf: 'center',
	},

	radioInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16,
	},
});

const TagItem = ({ title }) => (
	<View
		style={{
			padding: 12,
			marginRight: 20,
			backgroundColor: '#20232A',
			borderRadius: 8,
		}}
	>
		<CustomText styles={{ fontSize: 20, color: '#fff' }}>
			{title}
		</CustomText>
	</View>
);
