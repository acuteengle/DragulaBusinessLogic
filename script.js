const left = document.querySelector('#left');
const right = document.querySelector('#right');

const answers = {
    right: ["orange", "apple"]
};

const drake = dragula([left, right], {
    accepts: (el, target) => {
        if (answers[target.id] == undefined) {
            return true;
        }
        else if (!answers[target.id].includes(el.id)) {
            return false;
        }
        else {
            return true;
        }
    },
    revertOnSpill: true
});



drake.on("drop", (el, target) => {
    console.log(el);
    console.log(target);

    if (answers[target.id] == undefined) {
        el.style.backgroundColor = "#87D6FF";
    }
    else if (!answers[target.id].includes(el.id)) {
        el.style.backgroundColor = "#FF5D5D";
    }
    else {
        el.style.backgroundColor = "#5BFF5B";
    }

});