import React, { useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Pressable,
	SafeAreaView,
	View,
} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { search } from '../api';
import SearchIcon from '../components/icons/SearchIcon';
import { NormalRegular, TextInput } from '../components/Texts';

export default function SearchScreen() {
	const navigation = useNavigation();
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const { colors } = useTheme();

	const renderSeparator = () => (
		<View
			style={{
				height: 1,
				opacity: 0.5,
				marginHorizontal: 15,
				backgroundColor: colors.border,
			}}
		/>
	);

	const onPress = (id: number, name: string) => {
		navigation.goBack();
		navigation.navigate('Details', { id, name });
	};

	const renderItem = ({ item }) => (
		<Pressable
			onPress={() => onPress(item.id, item.name)}
			style={({ pressed }) => ({
				paddingHorizontal: 15,
				paddingVertical: 10,
				backgroundColor: pressed ? colors.primary : colors.background,
			})}
		>
			<NormalRegular key={item.id}>{item.name}</NormalRegular>
		</Pressable>
	);

	const renderLoading = () => (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<ActivityIndicator size="large" />
		</View>
	);

	const onSearch = ({ nativeEvent: { text } }) => {
		setIsLoading(true);
		search(text)
			.then(setResults)
			.then(() => setIsLoading(false));
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
			<View
				style={{
					padding: 10,
					marginHorizontal: 15,
					flexDirection: 'row',
					alignItems: 'center',
					borderBottomWidth: 1,
					borderColor: colors.textLight,
				}}
			>
				<SearchIcon color={colors.text} />
				<TextInput
					autoFocus
					style={{
						color: colors.text,
					}}
					placeholderTextColor={colors.textLight}
					enterKeyHint="search"
					placeholder="Search for a game"
					onSubmitEditing={onSearch}
				/>
			</View>
			{isLoading ? (
				renderLoading()
			) : (
				<FlatList
					data={results}
					renderItem={renderItem}
					contentContainerStyle={{ flex: 1 }}
					ItemSeparatorComponent={renderSeparator}
				/>
			)}
		</SafeAreaView>
	);
}
