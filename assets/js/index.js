let count = 10;
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD'];

const countdown = setInterval(() => {
    console.log(count);
    document.body.style.backgroundColor = colors[count % colors.length];
    count--;

    if (count < 0) {
        clearInterval(countdown);
        setTimeout(() => {
            console.log("Finished!");
            document.body.style.backgroundColor = '';
        }, 2000);
    }
}, 1000);