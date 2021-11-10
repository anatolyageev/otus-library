import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        library: []
    },
    mutations: {
        SET_LIBRARY_TO_STATE: (state, library) => {
            state.library = library;
        },
        DELETE_BOOK_MUTATION: (state, index) => {
            state.library.splice(index, 1);
        }
    },
    actions: {
        GET_LIBRARY_FROM_API({commit}) {
            return axios('/library', {
                method: "GET"
            })
                .then((library) => {
                    commit('SET_LIBRARY_TO_STATE', library.data);
                    console.log(library);
                    return library;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
        DELETE_BOOK_FROM_API({commit},book_id, index){
            console.log(book_id);
            axios('/library/'+book_id, {method: "DELETE"}).then(commit('DELETE_BOOK_MUTATION',index))
        }
    },
    getters: {
        LIBRARY(state) {
            return state.library;
        }
    }

})

export default store;