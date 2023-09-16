import { createStore } from "vuex"
import axiosClient from "../axios";


const tempSurveys = [
    {
        id: 100,
        title: 'Monkey Survey',
        slug: 'monkey-survey',
        status: 'draft',
        image: 'http://via.placeholder.com/640x360',
        description: 'abc',
        created_at: '2021-12-20 14:00:00',
        updated_at: '2021-12-20 17:00:00',
        expire_date: '2021-12-27 14:00:00',
        questions: [
            //Array'll have objs of questions
            {
                id: 1,
                type: 'select',
                question: 'From which country are you?',
                description: null,
                data: {
                    Options: [
                        {uuid:'1bc', text: "USA"},
                        {uuid:'3bv', text: "Ind"},
                        {uuid:'43f', text: "Pak"},
                        {uuid:'z5c', text: "Jpn"},
                    ]
                },
            },
            {
                id: 2,
                type: 'checkbox',
                question: 'What is your skills?',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit lobortis nullam nibh dis ut.',
                data: {
                    Options: [
                        {uuid:'5bc', text: "PHP"},
                        {uuid:'hbv', text: "JS"},
                        {uuid:'47f', text: "CSS"},
                        {uuid:'zkc', text: ".Net"},
                    ]
                },
            },
            {
                id: 3,
                type: 'checkbox',
                question: 'Which framework do you referred?',
                description: 'fansectetur adipiscing, elit lobortis nullam nibh dis ut,ipsum dolor sit amet c',
                data: {
                    Options: [
                        {uuid:'6bc', text: "Laravel"},
                        {uuid:'hbv', text: "NextJS"},
                        {uuid:'4jf', text: "VueJS"},
                        {uuid:'zfh', text: ".ReactJS"},
                    ]
                },
            },
            {
                id: 4,
                type: 'radio',
                question: 'Please select your gender?',
                description: 'lit lobortis nullam nibh dis ut,ipsum dolor sit amet c',
                data: {
                    Options: [
                        {uuid:'aaa', text: "Male"},
                        {uuid:'bbb', text: "Female"},
                    ]
                },
            },
            {
                id: 5,
                type: 'text',
                question: 'Tell us about yourself',
                description: 'vithac imperdiet conubia quam posuere in vehicula dignissim sapien.',
                data: {},
            },
            {
                id: 5,
                type: 'textarea',
                question: 'Describe your educational summary',
                description: 'vitae quis velit sagittis conubia egestas suscipit. Nullam leo sapien luctus fringilla hac rutrum himenaeos, cubilia ornare primis facilisi condimentum ultricies mollis metus, nisl ultrices est magna felis facilisis. Ultrices nam nisl purus varius mus imperdiet, tellus rhoncus mauris feugiat vitae eleifend, pretium dis sociosqu laoreet sed. Tempus pellentesque vitae accumsan venenatis platea donec molestie cras vel quisque, hac imperdiet conubia quam posuere in vehicula dignissim sapien.',
                data: {},
            },
        ],
    },
    {
        id: 200,
        title: 'Laravel Survey',
        slug: 'larave-survey',
        status: 'active',
        image: 'http://via.placeholder.com/640x360',
        description: 'xyz',
        created_at: '2021-12-20 14:00:00',
        updated_at: '2021-12-20 17:00:00',
        expire_date: '2021-12-27 14:00:00',
        questions: [],
    },
    {
        id: 300,
        title: 'Vue3 Survey',
        slug: 'vue3-survey',
        status: 'active',
        image: 'http://via.placeholder.com/640x360',
        description: 'andsdjknwedio',
        created_at: '2021-12-20 14:00:00',
        updated_at: '2021-12-20 17:00:00',
        expire_date: '2021-12-27 14:00:00',
        questions: [],
    },
    {
        id: 400,
        title: 'Tatilwind Survey',
        slug: 'ailwind-survey',
        status: 'active',
        image: 'http://via.placeholder.com/640x360',
        description: 'andsdjknwedio',
        created_at: '2021-12-20 14:00:00',
        updated_at: '2021-12-20 17:00:00',
        expire_date: '2021-12-27 14:00:00',
        questions: [],
    },
]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN")
        },
        surveys: [...tempSurveys],
    },
    getters: {},
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)
            .then( ({data}) => {
                commit('setUser', data);
                return data;
            })
        },
        
        login({ commit }, user) {
            return axiosClient.post('/login', user)
            .then(({data}) => {
                commit('setUser', data);
                return data;
            })
        },
        
        logout({ commit }) {
            return axiosClient.post('/logout')
            .then(response => {
                commit('logout');
                return response;
            })
        }
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem('TOKEN');
        },

        setUser: (state, userData) => {
            state.user.data = userData.user;
            state.user.token = userData.token;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {}
})

export default store;
