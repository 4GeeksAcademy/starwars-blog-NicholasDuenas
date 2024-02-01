const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [

			]
		},
		actions: {
			updateFavorites: (newFavorite) => {
				let favorites = getStore().favorites
				if (favorites.includes(newFavorite)) {
					let newFavorites = favorites.filter(item => item != newFavorite)
					setStore({favorites: newFavorites})
				}
				else {
					favorites.push(newFavorite)
					setStore({favorites: favorites})
				} 
			}
		}
	};
};

export default getState;
