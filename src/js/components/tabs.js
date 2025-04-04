
import Tab from 'bootstrap/js/dist/tab.js';

window.tabInstances = new Map();

window.initializeTab = function (element) {
    const tab = new Tab(element);
    tabInstances.set(element, tab);
};

document.querySelectorAll('[data-bs-toggle="tab"]').forEach((element) => {
    initializeTab(element);
});

document.body.addEventListener('click', (event) => {
    const target = event.target.closest('[data-bs-toggle="tab"]');
    if (target) {
        event.preventDefault();
        if (!tabInstances.has(target)) {
            initializeTab(target);
        }
        tabInstances.get(target).show();
    }
});
