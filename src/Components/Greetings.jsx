import { useEffect, useState, } from 'react';
import { StyleSheet } from 'react-native';
import CustomText from './CustomText';

const Greetings = () => {
	const [greeting, setGreeting] = useState('');

	useEffect(() => {
		const today = new Date();
		const curHr = today.getHours();

		if (curHr < 12) {
			setGreeting('Good morning');
		} else if (curHr < 18) {
			setGreeting('Good afternoon');
		} else {
			setGreeting('Good evening');
		}
	}, []);

	return <CustomText styles={styles.text}>Hi {greeting}</CustomText>;
};


const styles= StyleSheet.create({
    text: {
        fontSize: 30
    }
})
export default Greetings;
