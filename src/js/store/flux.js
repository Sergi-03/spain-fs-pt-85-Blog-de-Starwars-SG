const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: (characterName) => {
				const store = getStore(); 

				if (!store.favorites.includes(characterName)) {
					setStore({
						favorites: [...store.favorites, characterName]
					});
		}
	},
	        removeFavorite: (characterName) => {
		        const store = getStore(); 
		        const updatedFavorites = store.favorites.filter(fav => fav !== characterName);
		
		        setStore({
			    favorites: updatedFavorites
		});
}
		}
	};
};

export default getState;
