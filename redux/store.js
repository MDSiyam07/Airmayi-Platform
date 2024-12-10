import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const candidatesSlice = createSlice({
    name: 'candidates',
    initialState: {
      list: [], // Liste des candidats
      selectedCandidateId: null, // ID du candidat sélectionné
    },
    reducers: {
        addCandidate: (state, action) => {
            const newCandidate = {
                id: state.list.length + 1,
                ...action.payload,
            };
            console.log('Adding candidate:', newCandidate); // Vérification de l'ajout du candidat
            state.list.push(newCandidate);
        },

        selectCandidate: (state, action) => {
            state.selectedCandidateId = action.payload; // ID du candidat sélectionné
        },
    },
  });
  
  // Exporter les actions
  export const { addCandidate, selectCandidate, updateCandidate } = candidatesSlice.actions;
  

const store = configureStore({
  reducer: {
    candidates: candidatesSlice.reducer,
  },
});

export default store;