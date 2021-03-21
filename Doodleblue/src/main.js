import Vue from 'vue';

// thirdparty dependency
import VueLodash from 'vue-lodash'
import clonedeep from 'lodash/cloneDeep'

// components
import sider from './components/sider.vue'
import addnewcontact from './components/addnewcontact.vue'
import contactdetails from './components/contactdetails.vue'
import contactlist from './components/contactlist.vue'
import contactsearch from './components/contactsearch.vue'
import editcontact from './components/editcontact.vue'
import store from  './data_store/store.js'
import { words } from 'lodash';
Vue.use(VueLodash, { lodash: { clonedeep } })


var VueObj = new Vue({
    store:store,
    data:{},
    
    template: `
    <div>
    <sider/>
    <addnewcontact v-if="confirm"/>
    <contactsearch v-if="searchpage"/>
    <editcontact v-if="editcontact"></editcontact>
    </div>
    `,
    components: {sider,addnewcontact,contactsearch,editcontact},
    computed:{
        searchpage: function(){
            return store.getters['Getopenedpagestate'].searchpage
        },
        confirm: function(){
            return store.getters['Getopenedpagestate'].confirm
        },
        editcontact : function(){
            return store.getters['Getopenedpagestate'].editcontact
        }
    }    
}).$mount('#app')

