import { NameDisplay } from './name-display.mjs';

var names = ['Tom', 'Susie', 'Jane', 'Spot', 'Timmy', 'Mary',
'Jane', 'Bob', 'Steve'];

var vm = new Vue({
    el: '#app',
    data: {
        name: ''
    },
    render: function(createElement) {
        return createElement(NameDisplay,{
            props: {
                name: this.name
            }
        });
    }
});

for(let i = 0; i < names.length; i++){
    setTimeout(() => {
        vm.name = names[i]
    }, i * 1000);
}