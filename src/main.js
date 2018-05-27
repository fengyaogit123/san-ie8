import "babel-polyfill"
import San from 'san'
import Hello from './components/Hello.san'
var MyApp = San.defineComponent({
    template: '<p> <hellos /> </p>',
    components:{
        "hellos":Hello
    },
    initData: function () {
        return {
            name: 'San'
        };
    }
});


var myApp = new MyApp();
myApp.attach(document.body);
console.log(3333)