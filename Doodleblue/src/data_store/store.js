import { stubTrue } from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'
import State from './State.js'


Vue.use(Vuex)

export default new Vuex.Store({
    state:State,
    getters: {
        Getopenedpagestate : function(state) {
            return state.opened_page
        },
        Getcontacts: function(state) {
            return state.contacts;
        },
        Getfilteredcontacts: (state) => (text) => {
            
            return state.contacts.filter(thing => thing.name.toLowerCase().includes(text.toLowerCase()))
          },
        Getdisplaydetails : function(state){
            return state.displaydetails;
        }

    },
    actions:{
        openItem: function({ dispatch, commit }, payload) {
            commit('OPEN_ITEM', payload)
    },
        displaydetails : function({dispatch,commit},payload){
            commit('displaydetails',payload)
        },
        addcontact : function({dispatch,commit},payload){
            commit('addcontact',payload)
        },
        editcontact : function({dispatch,commit},payload){
            commit('editcontact',payload)
        },
        deletecontact : function({dispatch,commit},payload){
            commit('deletecontact',payload)
        },

    },
    mutations:{
        OPEN_ITEM: function(state, payload) {
            for (let item in state.opened_page) {
                if (item == payload.item) {
                    state.opened_page[item] = true
                } else {
                    state.opened_page[item] = false
                }
            }
        },

        displaydetails:function(state,payload) {
            var obj={ 
                name:payload.name,
                email:payload.email,
                phone:payload.phone,
                company:payload.company,
                Address:payload.Address,
                color:payload.color,
                Initial:payload.Initial,
                fid:payload.fid
            }

            state.displaydetails = [];
            state.displaydetails.push(obj);
            
        },

        addcontact : function(state,payload) {
            var obj = {
                name:payload.name,
                email:payload.email,
                phone:payload.phone,
                company:payload.company,
                Address:payload.Address,
                color:payload.color,
                Initial:payload.Initial
            }
            state.contacts.push(obj);
        },
        editcontact : function(state,payload){
            var arr = state.contacts
            for(let item in arr){
                if(arr[item].fid==payload.fid){
                    arr[item].name = payload.name
                    arr[item].email = payload.email
                    arr[item].phone = payload.phone
                    arr[item].company = payload.company
                    arr[item].Address = payload.Address
                    arr[item].color = payload.color
                    arr[item].Initial - payload.Initial
                                }
            }
        },
        deletecontact : function(state,payload){
            var arr = state.contacts
            for(let item in arr){
                if(arr[item].fid==payload.id){
                    var index = arr.indexOf(arr[item])
                    if(index>-1){
                        arr.splice(index,1)
                    }
                }
            }
        }


    },
    strict: process.env.NODE_ENV === 'development'
})