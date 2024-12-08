import { configureStore, createSlice } from '@reduxjs/toolkit';

const candidatesSlice = createSlice({
  name: 'candidates',
  initialState: {
    list: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ],
    selectedCandidateId: null, // L'ID du candidat sélectionné
  },
  reducers: {
    selectCandidate: (state, action) => {
      state.selectedCandidateId = action.payload;
    },
  },
});

export const { selectCandidate } = candidatesSlice.actions;

const store = configureStore({
  reducer: {
    candidates: candidatesSlice.reducer,
  },
});

export default store;