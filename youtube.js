let result = document.getElementById('result');
    async function home() {
        let res1 = await fetch(`https://quizmastertesting.motion.ac.in/motioneducation/api/user/videoURL`);
        let data1 = await res1.json();
        let { items } = data1
        items = items.filter((el) => {
            return el.id.videoId != undefined;
        })
        items.forEach(({ id: { videoId } }) => {
            let div1 = document.createElement('div')
            div1.innerHTML = `<iframe width="250" height="200" src="https://quizmastertesting.motion.ac.in/motioneducation/api/user/videoURL/${youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            result.appendChild(div1);
        });
    }
    home();
    async function searchResult() {
        q = document.getElementById('input').value
        let res = await fetch(`https://quizmastertesting.motion.ac.in/motioneducation/api/user/videoURL`);
        let data = await res.json();
        result.innerHTML = null;
        let { items } = data
        items = items.filter((el) => {
            return el.id.videoId != undefined;
        })
        items.forEach(({ id: { videoId } }) => {
            let div = document.createElement('div')
            div.innerHTML = `<iframe width="250" height="200" src="https://quizmastertesting.motion.ac.in/motioneducation/api/user/videoURL/${youtube_id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            result.appendChild(div);
        });
    }