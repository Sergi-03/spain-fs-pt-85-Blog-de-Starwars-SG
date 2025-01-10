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
			favorites: [],
			favoriteCount: 0,
			characters: [],
			characterDetails: null,
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
			
			getCharacterData: async () => {
                try {
                    let response = await fetch("https://rickandmortyapi.com/api/character");
                    if (response.ok) {
                        let data = await response.json();
                        setStore({ characters: data.results });
                    } else {
                        console.error("Error fetching characters");
                    }
                } catch (error) {
                    console.error("Could not fetch character data", error);
                }
            },
			 getCharacterDetails: async (id) => {
                try {
                    let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                    if (response.ok) {
                        let data = await response.json();
                        setStore({ characterDetails: data });
                    } else {
                        console.error("Error fetching character details");
                    }
                } catch (error) {
                    console.error("Could not fetch character details", error);
                }
            },
			addFavorite: (characterName) => {
				const store = getStore(); 

				if (!store.favorites.includes(characterName)) {
					setStore({
						favorites: [...store.favorites, characterName],
						favoriteCount: store.favoriteCount +1
					});
		}
	},
	        removeFavorite: (characterName) => {
		        const store = getStore(); 
		        const updatedFavorites = store.favorites.filter(fav => fav !== characterName);
		
		        setStore({
			    favorites: updatedFavorites,
				favoriteCount: store.favoriteCount -1
		});
}
		}
	};
};

export default getState;
