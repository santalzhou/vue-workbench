import workbench from './components/workbench'
export default workbench;
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('workbench', workbench)
}