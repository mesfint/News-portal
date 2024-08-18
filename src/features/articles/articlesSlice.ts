// src/features/articles/articlesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Article {
  content: string;
  id: number;
  title: string;
  summary: string;
  image: string;
  url: string;
}

interface ArticlesState {
  list: Article[];
}

const initialState: ArticlesState = {
  list: [
    // { id: 1, title: 'Article 1', summary: 'Summary of article 1' },
    // { id: 2, title: 'Article 2', summary: 'Summary of article 2' },
    // { id: 3, title: 'Article 3', summary: 'Summary of article 3' },
    // { id: 4, title: 'Article 4', summary: 'Summary of article 4' },
    // { id: 5, title: 'Article 5', summary: 'Summary of article 5' },
    // { id: 6, title: 'Article 6', summary: 'Summary of article 6' },
    // { id: 7, title: 'Article 7', summary: 'Summary of article 7' },
  ],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    //Replaces the entire list of articles.
    setArticles(state, action: PayloadAction<Article[]>) {
      state.list = action.payload;
    },
    addArticle(state, action: PayloadAction<Article>) {
      state.list.push(action.payload);
    },
    removeArticle(state, action: PayloadAction<number>) {
      state.list = state.list.filter(article => article.id !== action.payload);
    },
  },
});

export const { addArticle, removeArticle , setArticles} = articlesSlice.actions;

export default articlesSlice.reducer;
