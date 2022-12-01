import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

const ItemsList = ({ items, renderItem, maxHeight }) => {
	return (
		<>
			{items.length !== 0 ? (
				<FlatList
					data={items}
					renderItem={renderItem}
					style={[styles.list, { maxHeight: maxHeight }]}
				/>
			) : null}
		</>
	)
}

const styles = StyleSheet.create({
	list: {
		marginTop: 20,
		flexGrow: 0,
	},
})

export default ItemsList
